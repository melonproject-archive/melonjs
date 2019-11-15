import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { PolicyManagerAbi } from '../../../abis/PolicyManager.abi';
import { Spoke } from '../hub/Spoke';
import { applyMixins } from '../../../utils/applyMixins';
import { Policy } from './Policy';
import { ValidationError } from '../../../errors/ValidationError';
import { hexToBytes } from 'web3-utils';
import { DSAuthority } from '../../dependencies/DSAuthority';
import { encodeFunctionSignature } from '../../../utils/encodeFunctionSignature';

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
      methodArgs: [hexToBytes(signature), policyAddress],
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
      pre: result['0'],
      post: result['1'],
    };
    return policies as Policies;
  }

  /**
   * Gets a list of policies (with parameters) that are registered for a fund
   *
   * @param signature The signature of the policies
   * @param block The block number to execute the call on.
   */
  public async getPolicies(block?: number) {
    const sigsToCheck = [
      '0x79705be7', // make order
      '0xe51be6e8', // take order
      // getFunctionIdentifier(env, FunctionSignatures.makeOrder),
      // getFunctionIdentifier(env, FunctionSignatures.takeOrder),
      // getFunctionIdentifier(env, FunctionSignatures.cancelOrder),
      // getFunctionIdentifier(env, FunctionSignatures.withdrawTokens),
      // getFunctionIdentifier(env, FunctionSignatures.requestInvestment),
    ];

    const retrievedPolicies = await Promise.all(
      sigsToCheck.map(sig => {
        return this.getPoliciesBySignature(sig, block);
      }),
    );

    const policyAddresses = retrievedPolicies.map(policy => {
      return [...policy.pre, ...policy.post].map(address => address.toString());
    });

    const uniquePolicyAddresses = policyAddresses.reduce((carry, current) => {
      const add = current.filter(address => carry.indexOf(address) === -1);
      return [...carry, ...add];
    }, []);

    const policyObjects = uniquePolicyAddresses.map(async address => {
      const policy = new Policy(this.environment, address);
      const name = await policy.getIdentifier(block);
      // const parameters = await getParametersForPolicy(env, name, address);

      return {
        address,
        name,
        // parameters,
      };
    });

    return Promise.all(policyObjects);
  }
}

export interface PolicyManager extends Spoke {}
applyMixins(PolicyManager, [Spoke]);
