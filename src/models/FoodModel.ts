import { FoodHelper } from '../helpers/foodModelHelper'
export class FoodModel {
  constructor (private readonly food: FoodHelper) { }

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
