/* eslint-disable prettier/prettier */
import {Document} from "mongoose";

export interface ILogUser extends Document{
    readonly username: string;
    readonly password: string;
}