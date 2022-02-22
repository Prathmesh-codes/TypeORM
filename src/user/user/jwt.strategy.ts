import { UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import {Strategy, ExtractJwt} from 'passport-jwt';
import { JwtPayload } from "./jwt.payload";
import { USerRepository } from "./user.repository";
export class JwtStrategy extends PassportStrategy(Strategy){

constructor(
    @InjectRepository(USerRepository)
    private userRepository:USerRepository,
){


    //Get the token from incoming request and validate using secret
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey:'secret',
    });
}

async validate(payload:JwtPayload){
    //get the user id or username from the payload
    const user=this.userRepository.findOne({id:payload.id});

    if(!user){
        throw new UnauthorizedException();
    }
    return user;
}

}