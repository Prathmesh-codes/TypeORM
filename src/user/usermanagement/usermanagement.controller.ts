import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDTO } from '../user/dto/auth.credentials.dto';
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


}
