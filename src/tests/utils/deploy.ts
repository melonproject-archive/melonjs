import { ethers } from 'ethers';
import { AddressLike, RegistryBytecode, Registry } from '../..';
import {
  Version,
  VersionBytecode,
  AccountingFactory,
  AccountingFactoryBytecode,
  FeeManagerFactory,
  FeeManagerFactoryBytecode,
  ParticipationFactory,
  ParticipationFactoryBytecode,
  SharesFactory,
  SharesFactoryBytecode,
  TradingFactory,
  TradingFactoryBytecode,
  VaultFactory,
  VaultFactoryBytecode,
  PolicyManagerFactory,
  PolicyManagerFactoryBytecode,
} from '../../contracts';

export async function deployRegistry(signer: ethers.Signer, owner: string | Promise<string> = signer.getAddress()) {
  return Registry.deploy(RegistryBytecode, signer, await owner).send();
}

export async function deployVersion(
  signer: ethers.Signer,
  registry: AddressLike,
  accountingFactory: AddressLike,
  feeManagerFactory: AddressLike,
  participationFactory: AddressLike,
  sharesFactory: AddressLike,
  tradingFactory: AddressLike,
  vaultFactory: AddressLike,
  poliyManagerFactory: AddressLike,
  owner: string | Promise<string> = signer.getAddress(),
) {
  return Version.deploy(
    VersionBytecode,
    signer,
    accountingFactory,
    feeManagerFactory,
    participationFactory,
    sharesFactory,
    tradingFactory,
    vaultFactory,
    poliyManagerFactory,
    registry,
    await owner,
  ).send();
}

export async function deployAccountingFactory(signer: ethers.Signer) {
  return AccountingFactory.deploy(AccountingFactoryBytecode, signer).send();
}

export async function deployFeeManagerFactory(signer: ethers.Signer) {
  return FeeManagerFactory.deploy(FeeManagerFactoryBytecode, signer).send();
}

export async function deployParticipationFactory(signer: ethers.Signer) {
  return ParticipationFactory.deploy(ParticipationFactoryBytecode, signer).send();
}

export async function deploySharesFactory(signer: ethers.Signer) {
  return SharesFactory.deploy(SharesFactoryBytecode, signer).send();
}

export async function deployTradingFactory(signer: ethers.Signer) {
  return TradingFactory.deploy(TradingFactoryBytecode, signer).send();
}

export async function deployVaultFactory(signer: ethers.Signer) {
  return VaultFactory.deploy(VaultFactoryBytecode, signer).send();
}

export async function deployPolicyManager(signer: ethers.Signer) {
  return PolicyManagerFactory.deploy(PolicyManagerFactoryBytecode, signer).send();
}
