/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { IUser } from './interfaces/user.interface'
import { CreateUserDTO } from './dto/user.dto'

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel:Model<IUser> ){}

    async getUsers(): Promise<IUser[]>{
        const users = await this.userModel.find().select(['-password']);
        return users;   
    }

    async getUser(userID:number): Promise<IUser>{
        const user = await this.userModel.findById(userID).select(['-password']);
        return user;

    }

    async createUser(createUserDTO: CreateUserDTO):Promise<IUser>{
        const createdUser = new this.userModel(createUserDTO);
        return await createdUser.save();
        

    }

    async deleteUser(userID:number):Promise<IUser>{
        const deletedUser = this.userModel.findByIdAndDelete(userID);
        return deletedUser;
    }

    async updateUser(userID:number,createUserDTO:CreateUserDTO):Promise<IUser>{
        const updatedUser = await this.userModel.findByIdAndUpdate(userID,createUserDTO, {new:true});
        return updatedUser;

    }

}
