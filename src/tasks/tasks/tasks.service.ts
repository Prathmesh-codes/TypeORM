import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateTaskDTO } from './create.task.dto';
import {  Taskstatus } from './task.enum';
import * as uuid from 'uuid';
import { SearchTaskDTO } from './search.task.dto';
import { NotFoundError } from 'rxjs';
import { TaskRepository } from './task.repisitory';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {

    //Add dependency for task repo

constructor(@InjectRepository(TaskRepository) private taskRepository:TaskRepository,){}
    

    createtask(CreateTaskDTO:CreateTaskDTO){
        
        //get a new row created for the task
        return this.taskRepository.createTask(CreateTaskDTO);

     }


    async getTasks(searchTaskDTO:SearchTaskDTO){
     


        return this.taskRepository.getTasks(searchTaskDTO);
      
        }

updatetaskstatus(id:string, status:Taskstatus){}

deletetask(id:string){}

    }


