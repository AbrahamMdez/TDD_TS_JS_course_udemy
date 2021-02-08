import { FoodModel } from '../models/FoodModel'

describe('Classes', () => {
  it('Class FoodModel', () => {
    const foodModel = new FoodModel({
      type: 'Onion',
      year: 2021,
      status: 'fresh'
    })

    expect(foodModel.getType()).toEqual('Onion')
    expect(foodModel.getYear()).toEqual(2021)
    expect(foodModel.getStatus()).toEqual('fresh')
  })
})
