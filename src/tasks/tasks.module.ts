import { Module } from '@nestjs/common';
import { TaskmanagementController } from './taskmanagement/taskmanagement.controller';
import { TasksService } from './tasks/tasks.service';

@Module({
  controllers: [TaskmanagementController],
  providers: [TasksService]
})
export class TasksModule {}
