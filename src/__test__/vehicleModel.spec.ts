import { VehicleModel } from '../models/VehicleModel'

describe('Classes', () => {
  it('Class VehicleModel', () => {
    const vehicleModel = new VehicleModel('Nissan', 'DXT', 2020)

    expect(vehicleModel.getName()).toEqual('Nissan')
    expect(vehicleModel.getModel()).toEqual('DXT')
    expect(vehicleModel.getYear()).toEqual(2020)
  })
})
