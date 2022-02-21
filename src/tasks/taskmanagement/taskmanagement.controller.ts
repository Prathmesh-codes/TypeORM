import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { stringify } from 'querystring';
import { CreateTaskDTO } from '../tasks/create.task.dto';
import { SearchTaskDTO } from '../tasks/search.task.dto';
import { Taskstatus } from '../tasks/task.enum';
import { TasksService } from '../tasks/tasks.service';

@Controller('taskmanagement')
export class TaskmanagementController {

    //dependency Injection
    //Taskcontroller is dependent on Taskservice
    constructor(private taskService: TasksService){}

    @Get()
    public gettask(@Query() searchTaskDTO:SearchTaskDTO){
        return this.taskService.getTasks(searchTaskDTO);
    }

    @Post()
    @UsePipes(ValidationPipe)
    public createtask(@Body() CreateTaskDTO:CreateTaskDTO){
        //1.Create a new task 
        //2.Return all tasks
        return this.taskService.createtask(CreateTaskDTO);

     }

    @Delete('/:id')
    public deletetask(@Param('id')id:string){

        return this.taskService.deletetask(id);
        



    }

  
    @Patch('/:id/:status')
    updateTaskStatus(
      
      @Param('id') id: string,
      @Param('status') status: Taskstatus,
    ) {
      return this.taskService.updateTaskStatus(id, status);
    }

    

}