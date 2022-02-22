import { Module } from '@nestjs/common';
import { UsermanagementController } from './usermanagement/usermanagement.controller';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { USerRepository } from './user/user.repository';

@Module({

  imports:[TypeOrmModule.forFeature([USerRepository])],
  controllers: [UsermanagementController],
  providers: [UserService]
})
export class UserModule {}
