import type { AeadParams, EncryptedBuffer, SecretBuffer } from './types'
import type { LocalKeyHandle as LocalKeyHandleClass } from 'aries-askar-shared'

export type ErrorCode = number
export type EntryListHandle = number
export type LocalKeyHandlePLACEHOLDER = number
export type KeyEntryListHandle = number
export type ScanHandle = number
export type SessionHandle = number
export type StoreHandle = number

export type BufferFreeOptions = { secretBuffer: SecretBuffer }

export type SetCustomLoggerOptions = { logLevel: number; flush: boolean; enabled: boolean }
export type SetMaxLogLevelOptions = { logLevel: number }

export type EntryListCountOptions = { entryListHandle: EntryListHandle }
export type EntryListFreeOptions = { entryListHandle: EntryListHandle }
export type EntryListGetCategoryOptions = { entryListHandle: EntryListHandle; index: number }
export type EntryListGetNameOptions = { entryListHandle: EntryListHandle; index: number }
export type EntryListGetTagsOptions = { entryListHandle: EntryListHandle; index: number }
export type EntryListGetValueOptions = { entryListHandle: EntryListHandle; index: number }

export type KeyAeadDecryptOptions = {
  localKeyHandle: LocalKeyHandlePLACEHOLDER
  cipherText: Uint8Array
  nonce: Uint8Array
  tag: Uint8Array
  aad: Uint8Array
}
export type KeyAeadEncryptOptions = {
  localKeyHandle: LocalKeyHandlePLACEHOLDER
  message: Uint8Array
  nonce: Uint8Array
  aad: Uint8Array
}
export type KeyAeadGetPaddingOptions = { localKeyHandle: LocalKeyHandlePLACEHOLDER; msgLen: number }
export type KeyAeadGetParamsOptions = { localKeyHandle: LocalKeyHandlePLACEHOLDER }
export type KeyAeadRandomNonceOptions = { localKeyHandle: LocalKeyHandlePLACEHOLDER }
export type KeyConvertOptions = { localKeyHandle: LocalKeyHandlePLACEHOLDER; alg: string }
export type KeyCryptoBoxOptions = {
  recipKey: LocalKeyHandlePLACEHOLDER
  senderKey: LocalKeyHandlePLACEHOLDER
  message: Uint8Array
  nonce: Uint8Array
}
export type KeyCryptoBoxOpenOptions = {
  recipKey: LocalKeyHandlePLACEHOLDER
  senderKey: LocalKeyHandlePLACEHOLDER
  message: Uint8Array
  nonce: Uint8Array
}
export type KeyCryptoBoxSealOptions = { localKeyHandle: LocalKeyHandlePLACEHOLDER; message: Uint8Array }
export type KeyCryptoBoxSealOpenOptions = { localKeyHandle: LocalKeyHandlePLACEHOLDER; ciphertext: Uint8Array }
export type KeyDeriveEcdh1puOptions = {
  alg: string
  ephemKey: LocalKeyHandlePLACEHOLDER
  senderKey: LocalKeyHandlePLACEHOLDER
  recipKey: LocalKeyHandlePLACEHOLDER
  algId: Uint8Array
  apu: Uint8Array
  apv: Uint8Array
  ccTag: Uint8Array
  receive: number
}
export type KeyDeriveEcdhEsOptions = {
  alg: string
  ephemKey: LocalKeyHandlePLACEHOLDER
  recipKey: LocalKeyHandlePLACEHOLDER
  algId: Uint8Array
  apu: Uint8Array
  apv: Uint8Array
  receive: number
}
export type KeyEntryListCountOptions = { keyEntryListHandle: KeyEntryListHandle }
export type KeyEntryListFreeOptions = { keyEntryListHandle: KeyEntryListHandle }
export type KeyEntryListGetAlgorithmOptions = { keyEntryListHandle: KeyEntryListHandle; index: number }
export type KeyEntryListGetMetadataOptions = { keyEntryListHandle: KeyEntryListHandle; index: number }
export type KeyEntryListGetNameOptions = { keyEntryListHandle: KeyEntryListHandle; index: number }
export type KeyEntryListGetTagsOptions = { keyEntryListHandle: KeyEntryListHandle; index: number }
export type KeyEntryListLoadLocalOptions = { keyEntryListHandle: KeyEntryListHandle; index: number }
export type KeyFreeOptions = { keyEntryListHandle: KeyEntryListHandle }
export type KeyFromJwkOptions = { jwk: Uint8Array }
export type KeyFromKeyExchangeOptions = {
  alg: string
  skHandle: LocalKeyHandlePLACEHOLDER
  pkHandle: LocalKeyHandlePLACEHOLDER
}
export type KeyFromPublicBytesOptions = { alg: string; publicKey: Uint8Array }
export type KeyFromSecretBytesOptions = { alg: string; secretKey: Uint8Array }
export type KeyFromSeedOptions = { alg: string; seed: Uint8Array; method: string }
export type KeyGenerateOptions = { alg: string; ephemeral: number }
export type KeyGetAlgorithmOptions = { localkeyHandle: LocalKeyHandlePLACEHOLDER }
export type KeyGetEphemeralOptions = { localkeyHandle: LocalKeyHandlePLACEHOLDER }
export type KeyGetJwkPublicOptions = { localkeyHandle: LocalKeyHandlePLACEHOLDER }
export type KeyGetJwkSecretOptions = { localkeyHandle: LocalKeyHandlePLACEHOLDER }
export type KeyGetJwkThumbprintOptions = { localkeyHandle: LocalKeyHandlePLACEHOLDER }
export type KeyGetPublicBytesOptions = { localkeyHandle: LocalKeyHandlePLACEHOLDER }
export type KeyGetSecretBytesOptions = { localkeyHandle: LocalKeyHandlePLACEHOLDER }
export type KeySignMessageOptions = { localkeyHandle: LocalKeyHandlePLACEHOLDER; message: Uint8Array; sigType: string }
export type KeyUnwrapKeyOptions = {
  localkeyHandle: LocalKeyHandlePLACEHOLDER
  alg: string
  ciphertext: Uint8Array
  nonce: Uint8Array
  tag: Uint8Array
}
export type KeyVerifySignatureOptions = {
  localkeyHandle: LocalKeyHandlePLACEHOLDER
  message: Uint8Array
  signature: Uint8Array
  sigType: string
}
export type KeyWrapKeyOptions = {
  localkeyHandle: LocalKeyHandlePLACEHOLDER
  other: LocalKeyHandlePLACEHOLDER
  nonce: Uint8Array
}

export type ScanFreeOptions = { scanHandle: ScanHandle }
export type ScanNextOptions = { scanHandle: ScanHandle }
export type ScanStartOptions = {
  storeHandle: StoreHandle
  profile: string
  category: string
  tagFilter: string
  offset: number
  limit: number
}

export type SessionCloseOptions = { sessionHandle: SessionHandle; commit: number }
export type SessionCountOptions = { sessionHandle: SessionHandle; category: string; tagFilter: string }
export type SessionFetchOptions = {
  sessionHandle: SessionHandle
  category: string
  name: string
  forUpdate: number
}
export type SessionFetchAllOptions = {
  sessionHandle: SessionHandle
  catgory: string
  tagFilter: string
  limit: number
  forUpdate: number
}
export type SessionFetchAllKeysOptions = {
  sessionHandle: SessionHandle
  alg: string
  thumbprint: string
  tagFilter: string
  limit: number
  forUpdate: number
}
export type SessionFetchKeyOptions = { sessionHandle: SessionHandle; name: string; forUpdate: number }
export type SessionInsertKeyOptions = {
  sessionHandle: SessionHandle
  localKeyHandle: LocalKeyHandlePLACEHOLDER
  name: string
  metadata: string
  tags: string
  expiryMs: number
}
export type SessionRemoveAllOptions = { sessionHandle: SessionHandle; category: string; tagFilter: string }
export type SessionRemoveKeyOptions = { sessionHandle: SessionHandle; name: string }
export type SessionStartOptions = { storeHandle: StoreHandle; profile: string; asTransaction: number }
export type SessionUpdateOptions = {
  sessionHandle: SessionHandle
  operation: number
  category: string
  name: string
  value: Uint8Array
  tags: string
  expiryMs: number
}
export type SessionUpdateKeyOptions = {
  sessionHandle: SessionHandle
  name: string
  metadata: string
  tags: string
  expiryMs: number
}

export type StoreCloseOptions = { storeHandle: StoreHandle }
export type StoreCreateProfileOptions = { storeHandle: StoreHandle; profile: string }
export type StoreGenerateRawKeyOptions = { seed: Uint8Array }
export type StoreGetProfileNameOptions = { storeHandle: StoreHandle }
export type StoreOpenOptions = { specUri: string; keyMethod: string; passKey: string; profile: string }
export type StoreProvisionOptions = {
  specUri: string
  keyMethod: string
  passKey: string
  profile: string
  recreate: number
}
export type StoreRekeyOptions = { storeHandle: StoreHandle; keyMethod: string; passKey: string }
export type StoreRemoveOptions = { specUri: string }
export type StoreRemoveProfileOptions = { storeHandle: StoreHandle; profile: string }

export interface AriesAskar {
  version(): string
  getCurrentError(): string
  bufferFree(options: BufferFreeOptions): void
  clearCustomLogger(): void

  setCustomLogger(options: SetCustomLoggerOptions): void
  setDefaultLogger(): void
  setMaxLogLevel(options: SetMaxLogLevelOptions): void

  entryListCount(options: EntryListCountOptions): ErrorCode
  entryListFree(options: EntryListFreeOptions): void
  entryListGetCategory(options: EntryListGetCategoryOptions): string
  entryListGetName(options: EntryListGetNameOptions): string
  entryListGetTags(options: EntryListGetTagsOptions): string
  entryListGetValue(options: EntryListGetValueOptions): string

  keyAeadDecrypt(options: KeyAeadDecryptOptions): SecretBuffer
  keyAeadEncrypt(options: KeyAeadEncryptOptions): EncryptedBuffer
  keyAeadGetPadding(options: KeyAeadGetPaddingOptions): number
  keyAeadGetParams(options: KeyAeadGetParamsOptions): AeadParams
  keyAeadRandomNonce(options: KeyAeadRandomNonceOptions): SecretBuffer
  keyConvert(options: KeyConvertOptions): LocalKeyHandleClass
  keyCryptoBox(options: KeyCryptoBoxOptions): SecretBuffer
  keyCryptoBoxOpen(options: KeyCryptoBoxOpenOptions): SecretBuffer
  keyCryptoBoxRandomNonce(): SecretBuffer
  keyCryptoBoxSeal(options: KeyCryptoBoxSealOptions): SecretBuffer
  keyCryptoBoxSealOpen(options: KeyCryptoBoxSealOpenOptions): SecretBuffer
  keyDeriveEcdh1pu(options: KeyDeriveEcdh1puOptions): LocalKeyHandleClass
  keyDeriveEcdhEs(options: KeyDeriveEcdhEsOptions): LocalKeyHandleClass
  keyEntryListCount(options: KeyEntryListCountOptions): number
  keyEntryListFree(options: KeyEntryListFreeOptions): void
  keyEntryListGetAlgorithm(options: KeyEntryListGetAlgorithmOptions): string
  keyEntryListGetMetadata(options: KeyEntryListGetMetadataOptions): string
  keyEntryListGetName(options: KeyEntryListGetNameOptions): string
  keyEntryListGetTags(options: KeyEntryListGetTagsOptions): string
  keyEntryListLoadLocal(options: KeyEntryListLoadLocalOptions): string
  keyFree(options: KeyFreeOptions): void
  keyFromJwk(options: KeyFromJwkOptions): LocalKeyHandleClass
  keyFromKeyExchange(options: KeyFromKeyExchangeOptions): LocalKeyHandleClass
  keyFromPublicBytes(options: KeyFromPublicBytesOptions): LocalKeyHandleClass
  keyFromSecretBytes(options: KeyFromSecretBytesOptions): LocalKeyHandleClass
  keyFromSeed(options: KeyFromSeedOptions): LocalKeyHandleClass
  keyGenerate(options: KeyGenerateOptions): LocalKeyHandleClass
  keyGetAlgorithm(options: KeyGetAlgorithmOptions): string
  keyGetEphemeral(options: KeyGetEphemeralOptions): number
  keyGetJwkPublic(options: KeyGetJwkPublicOptions): string
  keyGetJwkSecret(options: KeyGetJwkSecretOptions): SecretBuffer
  keyGetJwkThumbprint(options: KeyGetJwkThumbprintOptions): string
  keyGetPublicBytes(options: KeyGetPublicBytesOptions): SecretBuffer
  keyGetSecretBytes(options: KeyGetSecretBytesOptions): SecretBuffer
  keySignMessage(options: KeySignMessageOptions): SecretBuffer
  keyUnwrapKey(options: KeyUnwrapKeyOptions): LocalKeyHandleClass
  keyVerifySignature(options: KeyVerifySignatureOptions): number
  keyWrapKey(options: KeyWrapKeyOptions): EncryptedBuffer

  scanFree(options: ScanFreeOptions): void
  scanNext(options: ScanNextOptions): Promise<EntryListHandle>
  scanStart(options: ScanStartOptions): Promise<void>

  sessionClose(options: SessionCloseOptions): Promise<void>
  sessionCount(options: SessionCountOptions): Promise<number>
  sessionFetch(options: SessionFetchOptions): Promise<EntryListHandle>
  sessionFetchAll(options: SessionFetchAllOptions): Promise<EntryListHandle>
  sessionFetchAllKeys(options: SessionFetchAllKeysOptions): Promise<KeyEntryListHandle>
  sessionFetchKey(options: SessionFetchKeyOptions): Promise<KeyEntryListHandle>
  sessionInsertKey(options: SessionInsertKeyOptions): Promise<void>
  sessionRemoveAll(options: SessionRemoveAllOptions): Promise<number>
  sessionRemoveKey(options: SessionRemoveKeyOptions): Promise<void>
  sessionStart(options: SessionStartOptions): Promise<SessionHandle>
  sessionUpdate(options: SessionUpdateOptions): Promise<void>
  sessionUpdateKey(options: SessionUpdateKeyOptions): Promise<void>

  storeClose(options: StoreCloseOptions): Promise<void>
  storeCreateProfile(options: StoreCreateProfileOptions): Promise<string>
  storeGenerateRawKey(options: StoreGenerateRawKeyOptions): string
  storeGetProfileName(options: StoreGetProfileNameOptions): Promise<string>
  storeOpen(options: StoreOpenOptions): Promise<StoreHandle>
  storeProvision(options: StoreProvisionOptions): Promise<StoreHandle>
  storeRekey(options: StoreRekeyOptions): Promise<void>
  storeRemove(options: StoreRemoveOptions): Promise<number>
  storeRemoveProfile(options: StoreRemoveProfileOptions): Promise<number>
}