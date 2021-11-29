/* eslint-disable prettier/prettier */
export class CreateUserDTO{
    readonly cedula: number;
    readonly tipoCedula:  string;
    readonly nombre: string;
    readonly telefono: number;
    readonly correo: string;
    readonly cargo: string;
    readonly usuarioLogin: string;
    readonly password: string;
    readonly createdAt: Date;
}