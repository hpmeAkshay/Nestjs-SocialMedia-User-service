import {Body, Controller,Get, Post } from "@nestjs/common";
import { Delete, Param, Put } from "@nestjs/common/decorators";
import { UserDto } from "src/Submodules/nestjs-social-media-dtos/src/dtos/user.dto";
import { UserService } from './user.service';


@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService){}
    
    @Post()
    async createUser(@Body() user: UserDto){
        try{
            let createUser=await this.userService.creatUser(user);
            return createUser;
        }catch(err){
            console.log(err);
            return err;
        }
    } 

    @Get()
    async findUser(){
        try{
            let fetchedUser= await this.userService.findAll();
            return fetchedUser;
        }catch(err){
            console.log(err)
            return err;
        }
    }

    @Put()
    async updateUser(@Body() user: UserDto){
        try{
            let updatedUser= await this.userService.updateUser(user);
            return updatedUser;
        }catch(err){
            console.log(err);
            return err;
        }
    }

    @Delete(':id')
    async deleteUser(@Param('id') userId: number){
        try{
            let deletedUser= this.userService.deleteUser(userId);
        }catch(err){
            console.log(err);
            return err;
        }
    }
}