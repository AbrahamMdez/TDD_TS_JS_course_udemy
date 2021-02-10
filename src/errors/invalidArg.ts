export class InvalidArguments extends Error {
  constructor (public arg: string) {
    super(`Invalid Argument: ${arg}`)
  }
}
