import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { PolicyManagerAbi } from '../../../abis/PolicyManager.abi';
import { Spoke } from '../hub/Spoke';
import { applyMixins } from '../../../utils/applyMixins';
import { Policy, PolicyArgs } from './Policy';
import { ValidationError } from '../../../errors/ValidationError';
import { DSAuthority } from '../../dependencies/authorization/DSAuthority';
import { encodeFunctionSignature } from '../../../utils/encodeFunctionSignature';
import { ExchangeAdapterAbi } from '../../../abis/ExchangeAdapter.abi';
import { EthfinexAdapterAbi } from '../../../abis/EthfinexAdapter.abi';
import { ParticipationAbi } from '../../../abis/Participation.abi';
import { hexToBytes } from 'web3-utils';

export type Policies = {
  pre: Address[];
  post: Address[];
};

export class NotAuthorizedError extends ValidationError {
  public name = 'NotAuthorizedError';

  constructor(message: string = 'Not authorized') {
    super(message);
  }
}

export class PolicyPositionNotPreOrPostError extends ValidationError {
  public name = 'PolicyPositionNotPreOrPostError';

  constructor(message: string = 'Policy position has to be pre (0) or post (1)') {
    super(message);
  }
}

export class ArrayLenghtsNotEqualError extends ValidationError {
  public name = 'ArrayLenghtsNotEqualError';

  constructor(
    public readonly signatures: string[],
    public readonly policyAddresses: Address[],
    message: string = 'Arrays do not have the same lengths',
  ) {
    super(message);
  }
}

export class PolicyManager extends Contract {
  public static readonly abi = PolicyManagerAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, hub: Address) {
    return super.createDeployment<PolicyManager>(environment, bytecode, from, [hub]);
  }

  /**
   * Registers a policy.
   *
   * @param from The address of the sender
   * @param signature The signature of the policy
   * @param policyAddress The address of the policy
   */
  public registerPolicy(from: Address, signature: string, policyAddress: Address) {
    const validate = async () => {
      const hub = await this.getHub();
      const auth = new DSAuthority(this.environment, hub);

      const registerSignature = encodeFunctionSignature(PolicyManagerAbi, 'register');
      const authorized = auth.canCall(hub, this.contract.address, registerSignature);
      if (!authorized) {
        throw new NotAuthorizedError();
      }

      const policy = new Policy(this.environment, policyAddress);
      const position = await policy.getPosition();
      if (position !== 0 && position !== 1) {
        throw new PolicyPositionNotPreOrPostError();
      }
    };

    return this.createTransaction({
      from,
      method: 'register',
      args: [signature, policyAddress],
      validate,
    });
  }

  /**
   * Batch registers policies
   *
   * @param from The address of the sender
   * @param signatures The signatures of the policies
   * @param policyAddresss The addresses of the policies
   */
  public batchRegisterPolicies(from: Address, signatures: string[], policyAddresses: Address[]) {
    const validate = async () => {
      if (signatures.length !== policyAddresses.length) {
        throw new ArrayLenghtsNotEqualError(signatures, policyAddresses);
      }
    };

    return this.createTransaction({
      from,
      method: 'batchRegister',
      args: [signatures, policyAddresses],
      validate,
    });
  }

  /**
   * Gets the policies by their signature.
   *
   * @param signature The signature of the policies
   * @param block The block number to execute the call on.
   */
  public async getPoliciesBySignature(signature: string, block?: number) {
    const result = await this.makeCall<{ '0': string[]; '1': string[] }>('getPoliciesBySig', [signature], block);
    const policies = {
      pre: result ? result['0'] : [],
      post: result ? result['1'] : [],
    };
    return policies as Policies;
  }

  /**
   * Gets a list of policies (with parameters) that are registered for a fund
   *
   * @param block The block number to execute the call on.
   */
  public async getPolicies(block?: number) {
    const sigsToCheck = [
      encodeFunctionSignature(ExchangeAdapterAbi, 'makeOrder'),
      encodeFunctionSignature(ExchangeAdapterAbi, 'takeOrder'),
      encodeFunctionSignature(ExchangeAdapterAbi, 'cancelOrder'),
      encodeFunctionSignature(EthfinexAdapterAbi, 'withdrawTokens'),
      encodeFunctionSignature(ParticipationAbi, 'requestInvestment'),
    ];

    const retrievedPolicies = await Promise.all(
      sigsToCheck.map(sig => {
        return this.getPoliciesBySignature(sig, block);
      }),
    );

    const policyAddresses = retrievedPolicies.map(policy => {
      return [...policy.pre, ...policy.post];
    });

    const uniquePolicyAddresses = policyAddresses.reduce((carry, current) => {
      const add = current.filter(address => carry.indexOf(address) === -1);
      return [...carry, ...add];
    }, []);

    const policyObjects = uniquePolicyAddresses.map(async address => {
      const policy = new Policy(this.environment, address);
      const identifier = await policy.getIdentifier(block);

      return {
        address,
        identifier,
      };
    });

    return Promise.all(policyObjects);
  }

  /**
   * Pre-validate policies (before trading)
   *
   * @param args The arguments of the policy validation function as [[PolicyValidationArgs]]
   * @param block The block number to execute the call on.
   */
  public async preValidate(args: PolicyArgs, block?: number) {
    await this.makeCall<void>(
      'preValidate',
      [
        hexToBytes(args.signature),
        args.addresses,
        args.values.map(value => value.toString()),
        hexToBytes(args.identifier),
      ],
      block,
    );
  }

  /**
   * Post-validate policies (before trading)
   *
   * @param args The arguments of the policy validation function as [[PolicyValidationArgs]]
   * @param block The block number to execute the call on.
   */
  public async postValidate(args: PolicyArgs, block?: number) {
    await this.makeCall<void>(
      'postValidate',
      [
        hexToBytes(args.signature),
        args.addresses,
        args.values.map(value => value.toString()),
        hexToBytes(args.identifier),
      ],
      block,
    );
  }
}

export interface PolicyManager extends Spoke {}
applyMixins(PolicyManager, [Spoke]);
