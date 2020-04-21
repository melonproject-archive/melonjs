import { ethers } from 'ethers';
import * as Melon from '.';

describe('Smoke test', () => {
  it('Can deploy a contract', async () => {
    const provider = new ethers.providers.JsonRpcProvider(process.env.GANACHE);
    const signer = provider.getSigner(0);
    const owner = await signer.getAddress();

    const factories = {
      accounting: await Melon.deployAccountingFactory(signer).send(),
      feeManager: await Melon.deployFeeManagerFactory(signer).send(),
      participation: await Melon.deployParticipationFactory(signer).send(),
      shares: await Melon.deploySharesFactory(signer).send(),
      trading: await Melon.deployTradingFactory(signer).send(),
      vault: await Melon.deployVaultFactory(signer).send(),
      poliyManager: await Melon.deployPolicyManagerFactory(signer).send(),
    };

    const registry = await Melon.deployRegistry(signer, owner).send();
    const version = await Melon.deployVersion(
      signer,
      factories.accounting,
      factories.feeManager,
      factories.participation,
      factories.shares,
      factories.trading,
      factories.vault,
      factories.poliyManager,
      registry,
      owner,
    ).send();

    console.log(await version.authority());
  });
});
