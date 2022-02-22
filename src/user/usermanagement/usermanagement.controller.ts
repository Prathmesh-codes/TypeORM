import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthCredentialsDTO } from '../user/dto/auth.credentials.dto';
import { GetUser } from '../user/get.user.decorator';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';

@Controller('usermanagement')
export class UsermanagementController {


constructor(
    private userService:UserService
){}

    @Post('/signup')
    @UsePipes(ValidationPipe)
    signup(@Body() authCredentialsDTO: AuthCredentialsDTO){
    return this.userService.signup(authCredentialsDTO);
    }

    @Post('/signin')
    @UsePipes(ValidationPipe)
    signin(@Body() authCredentialsDTO:AuthCredentialsDTO){
    return this.userService.signin(authCredentialsDTO);
    }


    @Get('/profile')
    @UseGuards(AuthGuard())
    getprofile(@GetUser() user:UserEntity){
return user;
    
    }

}
