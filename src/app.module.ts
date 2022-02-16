import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TasksModule } from './tasks/tasks.module';
import { SharedmodulesModule } from './sharedmodules/sharedmodules.module';


@Module({
 
  controllers: [AppController],
  providers: [AppService],
  imports: [UserModule,  TasksModule, SharedmodulesModule],
})
export class AppModule {}
