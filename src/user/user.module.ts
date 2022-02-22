import { Module } from '@nestjs/common';
import { UsermanagementController } from './usermanagement/usermanagement.controller';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { USerRepository } from './user/user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './user/jwt.strategy';

@Module({

  imports:[

  JwtModule.register({
    secret:'secret',
    signOptions: {
      expiresIn: 3600,
    },
  }),

  
//for passport authentication

PassportModule.register({
  defaultStrategy: 'jwt',
}),



  TypeOrmModule.forFeature([USerRepository])],
  controllers: [UsermanagementController],
  providers: [UserService, JwtStrategy],

  exports:[

    //Use providers in task module
    JwtStrategy, PassportModule
  ],
})
export class UserModule {}
