export interface DecodedFunctionSignature {
  label: string;
  function: string;
  contract: string;
}

export function decodeFunctionSignature(signature: string): DecodedFunctionSignature | undefined {
  switch (signature) {
    case '0xe51be6e8f1c20394ac4bc9b52300bea4a3697c14c468087e25e8b916b34aa373':
      return {
        label: 'take',
        function: 'takeOrder',
        contract: 'ExchangeAdapter',
      };
    case '0x79705be7d675563c1e2321f67e8b325f7dd168f51975b104d5f4588cf7e82725':
      return {
        label: 'make',
        function: 'makeOrder',
        contract: 'ExchangeAdapter',
      };
    case '0x613466791ec33946b8819ce34672fed07c05cbddfd8152db7f548a582612dde9':
      return {
        label: 'cancel',
        function: 'cancelOrder',
        contract: 'ExchangeAdapter',
      };
  }

  return undefined;
}
