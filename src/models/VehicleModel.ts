import { strict } from 'assert'
import { VehicleHelper } from '../helpers/vehicleModelHelper'

export class VehicleModel {
  // Aqui en lugar de meter todas las propiedades de los vehiculos y generar mucho codigo, creamos una carpeta helpers y la importamos aqui(vehicle: vehicleHelper) que
  // fue importada arriba desde la carpeta helpers y despues para que sea funcional, abajo en los getters, decimos que this.vehicle.model...para que sepa de donde vienen los helpers
  constructor (private readonly vehicle: VehicleHelper) { }

  getName (): string {
    return this.vehicle.name
  }

  getModel (): string {
    return this.vehicle.model
  }

  getYear (): number {
    return this.vehicle.year
  }

  getPrice (): number {
    return this.vehicle.price
  }

  getInventory (): boolean {
    return this.vehicle.inventory
  }
};
