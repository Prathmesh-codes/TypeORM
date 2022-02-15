import { Module } from '@nestjs/common';
import { UsermanagementController } from './usermanagement/usermanagement.controller';

@Module({
  controllers: [UsermanagementController]
})
export class UserModule {}
