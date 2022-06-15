import { CryptoBox, Key, KeyAlgs } from 'aries-askar-shared'

import { setup } from './utils'

describe('CryptoBox', () => {
  beforeAll(() => setup())

  test('seal', () => {
    const x25519Key = Key.generate(KeyAlgs.X25519)

    const message = Uint8Array.from(Buffer.from('foobar'))
    const sealed = CryptoBox.seal({ receiverKey: x25519Key, message })
    const opened = CryptoBox.sealOpen({ receiverKey: x25519Key, ciphertext: sealed })
    expect(opened).toStrictEqual(message)
  })
})