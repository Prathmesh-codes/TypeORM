import { Module } from '@nestjs/common';
import { UsermanagementController } from './usermanagement/usermanagement.controller';
import { UserService } from './user/user.service';

@Module({
  controllers: [UsermanagementController],
  providers: [UserService]
})
export class UserModule {}
