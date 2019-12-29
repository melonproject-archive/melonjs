const signatures = {
  '0xe51be6e8f1c20394ac4bc9b52300bea4a3697c14c468087e25e8b916b34aa373': 'Take order',
  '0x79705be7d675563c1e2321f67e8b325f7dd168f51975b104d5f4588cf7e82725': 'Make order',
  '0x613466791ec33946b8819ce34672fed07c05cbddfd8152db7f548a582612dde9': 'Cancel order',
};

export function tradingSignatureName(signature: string) {
  if (signatures.hasOwnProperty(signature)) {
    const key = signature as keyof typeof signatures;
    return signatures[key];
  }

  return 'Invalid signature';
}
