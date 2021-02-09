import { HttpRequest, HttpResponse } from '../interfaces/httpInterfaces'
import { MissingFormalParams } from '../errors/clientErrors'
export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredProperties = ['name', 'model', 'year', 'color']

    for (const props of requiredProperties) {
      if (!httpRequest.body[props]) {
        return {
          statusCode: 400,
          body: new MissingFormalParams(`${props}`)
        }
      }
    }

    // EL CICLO FOR DE ARRIBA, ES EL REFACTOR DE TODO ESTO DE AQUI ABAJO
    /* if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('error in the: name')
      }
    }

    if (!httpRequest.body.model) {
      return {
        statusCode: 400,
        body: new Error('error in the: model')
      }
    }

    if (!httpRequest.body.year) {
      return {
        statusCode: 400,
        body: new Error('error in the: year')
      }
    } */
  }
};
