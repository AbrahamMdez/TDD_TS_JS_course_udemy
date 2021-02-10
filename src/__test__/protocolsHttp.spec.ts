import { parse } from 'path'
import { UrlLogin } from '../protocols/protocolsHttps'
import { InvalidArguments } from '../errors/invalidArg'

describe('Protocols Http and Querys', () => {
  test('Url login', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login')

    expect(parsedUrl.href).toEqual('http://localhost:3000/login')
    expect(parsedUrl.port).toBe('3000')
  })

  test('Response Query', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=user&password=password')
    const expectAuth = {
      user: 'user',
      password: 'password'
    }

    expect(parsedUrl.searchParams.get('user')).toEqual(expectAuth.user)
    expect(parsedUrl.searchParams.get('password')).toEqual(expectAuth.password)
  })

  test('Invalid Url', () => {
    function expectError (): void {
      UrlLogin.parseUrl('')
    }
    expect(expectError).toThrowError(new InvalidArguments(''))
  })
})
