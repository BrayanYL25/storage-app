import { describe, test, expect } from 'vitest'
import signin from '../services/signin.ts'

describe('Demo test', () => {
  test('should return hola', () =>
    expect(signin({ email: 'test@gmail.com', password: '1234568' })).toBe(
      'Hola'
    ))
})
