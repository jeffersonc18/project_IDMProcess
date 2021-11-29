/* eslint-disable prettier/prettier */
import { Controller, Get , Post , Put , Delete , Res , HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto'; 
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    
    constructor(private userService:UserService){}

    @Post('/create')
    async createUser(@Res() res, @Body() createUserDTO:CreateUserDTO){
       const user = await this.userService.createUser(createUserDTO);
       
        return res.status(HttpStatus.OK).json({
            message: 'Document Successsfully Created',
            user 
        });

    }

    @Get('/')
    async getUsers(@Res() res ){
        const users = await this.userService.getUsers();
        return res.status(HttpStatus.OK).json({
            users
        }) 
    }

    @Get('/:userID')
    async getUser(@Res() res, @Param('userID') userID){
        const user = await this.userService.getUser(userID);
        if (!user) throw new NotFoundException ('User does not exist');
        return res.status(HttpStatus.OK).json(user);
    }

    @Delete('/delete')
    async deleteUser(@Res() res, @Query('userID') userID){
        const userDeleted= await this.userService.deleteUser(userID);
        if (!userDeleted) throw new NotFoundException ('User does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'User Deleted Successfully',
            userDeleted  
        }); 
    }

    @Put('/update')
    async updateUser(@Res() res, @Body() createUserDTO:CreateUserDTO, @Query('userID') userID){
        const userUpdated = await this.userService.updateUser(userID,createUserDTO);
        if (!userUpdated) throw new NotFoundException ('user does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'User Updated Successfully',
            userUpdated
        })
    }
}
