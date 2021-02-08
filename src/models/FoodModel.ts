export class FoodModel {
  constructor (private readonly type: string, private readonly year: number, private readonly status: string) {}

  getType (): string {
    return this.type
  }

  getYear (): number {
    return this.year
  }

  getStatus (): string {
    return this.status
  }
}
