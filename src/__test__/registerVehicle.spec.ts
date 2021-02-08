import { RegisterVehicle } from '../controllers/registerVehicle'

describe('RegisterVehicle', () => {
  it('is the name dos not exist return 400', () => {
    // sut significa SISTEM UNDER TEST
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        // name: 'Nissan',
        model: 'DXT',
        year: 2020
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('error in the: name'))
  })

  it('is the model dos not exist return 400', () => {
    // sut significa SISTEM UNDER TEST
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nissan',
        // model: 'DXT',
        year: 2020
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('error in the: model'))
  })
})
