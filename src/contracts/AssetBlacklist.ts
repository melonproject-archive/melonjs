import { Contract as EthContract } from 'web3-eth-contract';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { applyMixins } from '../utils/applyMixins';
import { Policy } from './Policy';
import { AddressList } from './AddressList';
import { AssetBlacklistAbi } from '../abis/AssetBlacklist.abi';

export class AssetBlacklist extends Contract {
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(
      environment,
      typeof address === 'string' ? new environment.client.Contract(AssetBlacklistAbi, address) : address,
    );
  }
}

export interface AssetBlacklist extends Policy, AddressList {}
applyMixins(AssetBlacklist, [Policy, AddressList]);
