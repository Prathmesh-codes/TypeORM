import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDTO } from './dto/auth.credentials.dto';
import { JwtPayload } from './jwt.payload';
import { USerRepository } from './user.repository';

@Injectable()
export class UserService {
    
    constructor(
      @InjectRepository(USerRepository)
      private userRepository:USerRepository,


      private jwtService:JwtService,
    ){

    }
    
    async signup(authCredentialsDTO:AuthCredentialsDTO){

        return this.userRepository.signup(authCredentialsDTO);
    }
    
    async signin(authCredentialsDTO:AuthCredentialsDTO){
       
        
       const user=await this.userRepository.signin(authCredentialsDTO);

       if(!user){
           throw new NotFoundException('User not found');
       }

     

//Create a token

const payload: JwtPayload={ username: user.username, id:user.id };


const token= await this.jwtService.sign(payload);

return {token};

    }

}
