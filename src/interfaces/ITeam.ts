//ESTA INTERFACE LA VAMOS A EXPORTAR PARA QUE SE PUEDA IMPLEMENTAR EN UNA CLASE LLAMADA TEAM MODEL
//AQUI ESTAMOS USANDO EL PRINCIPIO INTERFACE SEGREGATION

export interface ISoccerPlay {
    attacker(name: string)
}
export interface ITeam {
    position(name: string, tshirt: number, skills: any[])
}