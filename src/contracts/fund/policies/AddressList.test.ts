import * as R from 'ramda';
import { AddressList } from './AddressList';
import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { AddressListBytecode } from '../../../abis/AddressList.bin';
import { randomAddress } from '../../../utils/tests/randomAddress';
import { sameAddress } from '../../../utils/sameAddress';

describe('AddressList', () => {
  let environment: TestEnvironment;
  let addressList: AddressList;
  const addresses = R.range(0, 5).map(address => randomAddress());

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = AddressList.deploy(environment, AddressListBytecode, environment.accounts[0], addresses);
    addressList = await deploy.send(await deploy.estimateGas());
  });

  it('should check if an address is member of an address list', async () => {
    const result = await addressList.isMember(addresses[1]);
    expect(result === true || result === false).toBe(true);
  });

  it('should return the correct number of members', async () => {
    const result = await addressList.getMemberCount();
    expect(result.isEqualTo(addresses.length)).toBe(true);
  });

  it('should return a list of members', async () => {
    const result = await addressList.getMembers();
    result.map(address => {
      expect(addresses.some(a => sameAddress(a, address))).toBe(true);
    });
  });
});
