import { Document } from "mongoose";

export interface Documento extends Document{
    readonly code:number;
    readonly name:string;
    readonly description:string;
}