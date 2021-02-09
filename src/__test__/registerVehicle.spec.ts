import { RegisterVehicle } from '../controllers/registerVehicle'
import { MissingFormalParams } from '../errors/clientErrors'

describe('RegisterVehicle', () => {
  it('is the name does not exist return 400', () => {
    // sut significa SISTEM UNDER TEST
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        // name: 'Nissan',
        model: 'DXT',
        year: 2020,
        color: 'green'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParams('error in the: name'))
  })

  it('is the model does not exist return 400', () => {
    // sut significa SISTEM UNDER TEST
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nissan',
        // model: 'DXT',
        year: 2020,
        color: 'green'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParams('error in the: model'))
  })

  it('is the year does not exist return 400', () => {
    // sut significa SISTEM UNDER TEST
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'DXT',
        // year: 2020,
        color: 'green'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParams('error in the: year'))
  })

  it('is the color does not exist return 400', () => {
    // sut significa SISTEM UNDER TEST
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'DXT',
        year: 2020
        // color: 'green'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParams('error in the: color'))
  })
})
