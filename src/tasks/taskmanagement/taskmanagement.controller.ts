import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { stringify } from 'querystring';
import { GetUser } from 'src/user/user/get.user.decorator';
import { UserEntity } from 'src/user/user/user.entity';
import { CreateTaskDTO } from '../tasks/create.task.dto';
import { SearchTaskDTO } from '../tasks/search.task.dto';
import { Taskstatus } from '../tasks/task.enum';
import { TasksService } from '../tasks/tasks.service';

@Controller('taskmanagement')
@UseGuards(AuthGuard())
export class TaskmanagementController {

    //dependency Injection
    //Taskcontroller is dependent on Taskservice
    constructor(private taskService: TasksService){}

    @Get()
    public gettask(
      @GetUser() user: UserEntity,
      @Query() searchTaskDTO:SearchTaskDTO){
        return this.taskService.getTasks(searchTaskDTO);
    }

    @Post()
    @UsePipes(ValidationPipe)
    public createtask(
      @GetUser() user: UserEntity,
      @Body() CreateTaskDTO:CreateTaskDTO){


        //1.Create a new task 
        //2.Return all tasks
        return this.taskService.createtask(CreateTaskDTO,user);

     }

    @Delete('/:id')
    public deletetask(
      @GetUser() user: UserEntity,
      @Param('id')id:string){

        return this.taskService.deletetask(id);
        



    }

  
    @Patch('/:id/:status')
    updateTaskStatus(
      @GetUser() user: UserEntity,
      @Param('id') id: string,
      @Param('status') status: Taskstatus,
    ) {
      return this.taskService.updateTaskStatus(id, status);
    }

    

}