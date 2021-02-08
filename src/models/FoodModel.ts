import { foodHelper } from '../helpers/foodModelHelper'
export class FoodModel {
  constructor (private readonly food: foodHelper) { }

  getType (): string {
    return this.food.type
  }

  getYear (): number {
    return this.food.year
  }

  getStatus (): string {
    return this.food.status
  }
}
