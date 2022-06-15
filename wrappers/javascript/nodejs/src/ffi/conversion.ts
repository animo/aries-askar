import type { TypedArray } from 'ref-array-di'
import type { Pointer } from 'ref-napi'

import { ByteBuffer } from 'aries-askar-shared'
import { reinterpret } from 'ref-napi'

import { ByteBufferStruct } from './structures'

// TODO: Does this do correct conversion?
// The data -> pointer scenario
export const byteBufferClassToStruct = ({ len, data }: ByteBuffer) => {
  return ByteBufferStruct({
    len,
    data: Buffer.from(data) as Pointer<TypedArray<number, number>>,
  })
}

export const byteBufferToReference = (byteBuffer: ByteBufferType) => {
  throw AriesAskarError.customError({ message: 'Method byteBufferToReference not implemented' })
}

export const secretBufferClassToStruct = byteBufferClassToStruct

export const uint8arrayToByteBufferStruct = (buf: Uint8Array) => {
  const byteBuffer = ByteBuffer.fromUint8Array(buf)
  return byteBufferClassToStruct(byteBuffer)
}

export const byteBufferToBuffer = (buffer: { data: Buffer; len: number }) => reinterpret(buffer.data, buffer.len)

export const secretBufferToBuffer = byteBufferToBuffer