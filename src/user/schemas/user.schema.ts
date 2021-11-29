/* eslint-disable prettier/prettier */
import { Schema } from "mongoose";

export const UserSchema = new Schema ({

    cedula: Number,
    tipoCedula:  String,
    nombre: String,
    telefono: Number,
    correo: String,
    cargo: String,
    usuarioLogin: String,
    password: String,
    createdAt: {
            type: Date,
            default: Date.now
        }

});