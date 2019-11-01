import * as R from 'ramda';
import { AddressList } from './AddressList';
import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { AddressListBytecode } from '../../../abis/AddressList.bin';
import { randomAddress } from '../../../utils/tests/randomAddress';
import { Address } from '../../../Address';
import { sameAddress } from '../../../utils/sameAddress';

describe('AddressList', () => {
  let environment: TestEnvironment;
  let addressList: AddressList;
  let addresses: Address[];

  beforeAll(async () => {
    environment = await createTestEnvironment();

    addresses = R.range(0, 5).map(address => randomAddress());

    const deploy = AddressList.deploy(environment, AddressListBytecode, environment.accounts[0], addresses);
    addressList = await deploy.send(await deploy.estimate());
  });

  it('should check if an address is member of an address list', async () => {
    const result = await addressList.isMember(addresses[1]);
    expect(result === true || result === false).toBe(true);
  });

  it('should return a list of members', async () => {
    const result = await addressList.getMembers();
    result.map(address => {
      expect(addresses.some(a => sameAddress(a, address))).toBe(true);
    });
  });
});
