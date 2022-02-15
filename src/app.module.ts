import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { SharedmodulesModule } from './sharedmodules/sharedmodules.module';


@Module({
 
  controllers: [AppController],
  providers: [AppService],
  imports: [UserModule, AuthModule, TasksModule, SharedmodulesModule],
})
export class AppModule {}
