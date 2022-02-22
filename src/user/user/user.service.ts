import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDTO } from './dto/auth.credentials.dto';
import { USerRepository } from './user.repository';

@Injectable()
export class UserService {
    
    constructor(
      @InjectRepository(USerRepository)
      private userRepository:USerRepository,
    ){

    }
    
    async signup(authCredentialsDTO:AuthCredentialsDTO){

        return this.userRepository.signup(authCredentialsDTO);
    }
    
    async signin(authCredentialsDTO:AuthCredentialsDTO){
       
        
       const result=await this.userRepository.signin(authCredentialsDTO);

       if(!result){
           throw new NotFoundException('User not found');
       }

       return {username:authCredentialsDTO.username};
    }

}
