// En lugar de tener todos las propiedades de los vehiculos metdias en el modelo, creamos una carpeta llamad helpers, donde meteremos todos las propiedas
// en el caso de seguir añadiendo ene l futuro mas propiedades a los modelos de los vehiculos, sera mejor hacerlo desde aqui y no cargar el modelo de propiedades nuevas.

export class VehicleHelper {
  name: string
  model: string
  year: number
  price: number
  inventory: true
}
