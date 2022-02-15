import { Module } from '@nestjs/common';
import { TaskmanagementController } from './taskmanagement/taskmanagement.controller';

@Module({
  controllers: [TaskmanagementController]
})
export class TasksModule {}
