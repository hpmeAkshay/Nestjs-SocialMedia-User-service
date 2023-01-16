import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/Submodules/nestjs-social-media-dtos/src/dtos/user.dto';
import { User } from 'src/Submodules/Nestjs-SocialMedia-Backend-Entities/src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){}

  async creatUser(user: UserDto) {
      try{
        let userEntity=this.userRepository.create(user);
        let createUser=this.userRepository.save(userEntity);
        return createUser;

      }catch(err){
        throw err;
      }
  }

  async findAll() {
    try{
      let retrievedUsers= await this.userRepository.find();
    return retrievedUsers;
    }
    catch(err){
      return err;
    }
  }

  async updateUser(user: UserDto){
    try{
      let updatedresult=this.userRepository.update(user.id,user);
      return updatedresult;
    }catch(err){
      return err;
    }
  }
  

  async deleteUser(userId: number){
    try{
      let deletedUser=this.userRepository.delete(userId);
      return deletedUser;
    }catch(err){
      return err;
    }
  }
}
