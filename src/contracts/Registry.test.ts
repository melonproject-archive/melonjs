import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import deployment from '../deployments/mainnet';
import { Environment } from '../Environment';
import { Registry } from './Registry';

describe('Registry', () => {
  let environment: Environment;
  let registry: Registry;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client, deployment);
    registry = Registry.forDeployment(environment);
  });

  it('should return the information of a version', async () => {
    const versionAddress = environment.deployment.melonContracts.version;
    const result = await registry.getVersionInformation(versionAddress);
    expect(result.exists == true).toBe(true);
    expect(result.name.startsWith('0x')).toBe(true);
  });

  it('should check if a fee was registered', async () => {
    const feeAddresses = environment.deployment.melonContracts.fees;
    const result = await registry.isFeeRegistered(feeAddresses.managementFee);
    const result1 = await registry.isFeeRegistered(feeAddresses.performanceFee);
    expect(result == true && result1 == true).toBe(true);
  });

  it('should return the information of the registry', async () => {
    const result = await registry.getRegistryInfomation();
    console.log(result);
  });
});
