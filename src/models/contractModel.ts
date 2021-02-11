import { Icontract } from '../interfaces/IContract';

//AQUI VAMOS A VER EL PRINCIPIO SOLID, OPEN TO EXTEND, CLOSE TO MODIFY, CREAMOS UNA CLASE CONTRACTMODEL QUE TENDRA UNOS DATOS Y UNA VEZ CREADOS NO SE PODRÁN MODIFICAR
//PARA PODER AGRANDAR LA CLASE(QUE ESTO SI LO PERMITE EL PRINCIPIO SOLID), VAMOS A CREAR ABAJO OTRA CLASE QUE EXTIENDA DE ESTA
export class ContractModel {
    constructor(public contract: Icontract) {
        Object.assign(this.contract)
    }

    getId (): string {
        return this.contract.id
    }

    getDateInit (): Date {
        return this.contract.date_init
    }

    getExpirationDate (): Date {
        return this.contract.expiration_date
    }

    getMonth (): number {
        return this.contract.month
    }

    getMonthlyCost (): number {
        return this.contract.monthlyCost
    }
}

//AQUI EXTENDEMOS LA CLASE PARA PODER AÑADIRLE MAS DATOS, COMO VEMOS CREAMOS CLASE CONTRACTPRIME, QUE EXTIENDE DE CONTRACTMODEL
export class ContractPrime extends ContractModel {
    mothlyDiscount(): number {
        return this.contract.monthlyCost * 0.10
    }
}