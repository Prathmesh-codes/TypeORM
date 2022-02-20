import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TasksModule } from './tasks/tasks.module';
import { SharedmodulesModule } from './sharedmodules/sharedmodules.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfiguration } from './config/typeorm.config';


@Module({
 
  controllers: [AppController],
  providers: [AppService],
  imports: [UserModule,  TasksModule, SharedmodulesModule, TypeOrmModule.forRoot(TypeORMConfiguration),
  ],
})
export class AppModule {}
