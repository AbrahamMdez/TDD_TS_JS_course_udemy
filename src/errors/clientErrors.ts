export class MissingFormalParams extends Error {
  constructor (public name: string) {
    super(`error In the Params: ${name}`)
  }
}
