import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDTO } from "./dto/auth.credentials.dto";
import { UserEntity } from "./user.entity";
import * as crypto from 'crypto-js'

@EntityRepository(UserEntity)
export class USerRepository extends Repository<UserEntity>{

async signup(authCredentialsDTO:AuthCredentialsDTO){


    //Create a row for user table
    const user=new UserEntity()
    user.username=authCredentialsDTO.username
    user.password= `${crypto.MD5(authCredentialsDTO.password)}`;
    await user.save();

}

async signin(authCredentialsDTO:AuthCredentialsDTO){

const {username,password}=authCredentialsDTO

//find user by username
const user=await this.findOne({username:username});

//Check if user exists



if(!user){

    return null;
}

const passwordValidation=user.validatePassword(password);
if(!passwordValidation){
  return null;  
}

return user;

}

}