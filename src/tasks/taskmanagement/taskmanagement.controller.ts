import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('taskmanagement')
export class TaskmanagementController {

    @Get()
    public gettaska(){
        return "list of tasks"
    }

    @Post()
    public createtask(){

    return "new task will get created here"
    }

    @Delete()
    public deletetask(){
        return"Deletes a task"
    }
}