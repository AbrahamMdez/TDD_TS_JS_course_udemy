// En lugar de tener todos las propiedades de la comida metdias en el modelo, creamos una carpeta llamad helpers, donde meteremos todos las propiedas
// en el caso de seguir añadiendo ene l futuro mas propiedades a los modelos de las frutas, sera mejor hacerlo desde aqui y no cargar el modelo de propiedades nuevas.

export class foodHelper {
  type: string
  year: number
  status: string
}
