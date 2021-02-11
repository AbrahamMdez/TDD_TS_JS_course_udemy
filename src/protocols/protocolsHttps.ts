import { URL } from 'url'
import { InvalidArguments } from '../errors/invalidArg'

export class UrlLogin {
  static parseUrl (url: string): URL {
    if (!url) {
      throw new InvalidArguments(url)
    }
    return new URL(url)
  } 
}
