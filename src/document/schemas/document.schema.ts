import {Schema} from 'mongoose'

export const DocumentSchema = new Schema({
    codigo:Number,
    name:String,
    description:String
});