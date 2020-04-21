import { ethers } from 'ethers';
import { Contract } from '../Contract';

export type AddressLike = string | Contract;

export async function resolveAddress(
  signerOrProvider: ethers.Signer | ethers.providers.Provider,
  value: AddressLike | Promise<AddressLike>,
) {
  const resolved = await Promise.resolve(value);

  if (Contract.isContract(resolved)) {
    const contract = await resolved.$$ethers.deployed();
    return signerOrProvider.resolveName(contract.address);
  }

  return signerOrProvider.resolveName(resolved.toString());
}

export async function resolveArguments(
  signerOrProvider: ethers.Signer | ethers.providers.Provider,
  type: ethers.utils.ParamType | ethers.utils.ParamType[],
  value: any,
): Promise<any> {
  const resolved = await Promise.resolve(value);
  if (Array.isArray(type)) {
    return Promise.all(
      type.map((type, index) => {
        const value = Array.isArray(resolved) ? resolved[index] : resolved[type.name];
        return resolveArguments(signerOrProvider, type, value);
      }),
    );
  }

  if (type.type === 'address') {
    return resolveAddress(signerOrProvider, resolved);
  }

  if (type.type === 'tuple') {
    return resolveArguments(signerOrProvider, type.components, resolved);
  }

  if (type.baseType === 'array') {
    if (!Array.isArray(resolved)) {
      throw new Error('Invalid value for array.');
    }

    return Promise.all(resolved.map((value) => resolveArguments(signerOrProvider, type.arrayChildren, value)));
  }

  return resolved;
}
