import { toUtf8, hexToNumberString, isHexStrict } from 'web3-utils';

export function hexToString(hex: string): string {
  if (isHexStrict(hex)) {
    try {
      return toUtf8(hex);
    } catch (e) {
      try {
        return hexToNumberString(hex);
      } catch (e) {
        return hex;
      }
    }
  }

  return hex;
}
