import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { TaskmanagementController } from './taskmanagement/taskmanagement.controller';
import { TaskRepository } from './tasks/task.repisitory';
import { TasksService } from './tasks/tasks.service';

@Module({

  //use typeorm to create the table task using repo

  imports:[TypeOrmModule.forFeature([TaskRepository]), UserModule],
  
  controllers: [TaskmanagementController],
  providers: [TasksService]
})
export class TasksModule {}
