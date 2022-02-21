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


        async getTaskById(id: string) {
            // select * from Task where id = {id}
            const task = await this.taskRepository.findOne(id);
            if (!task) {
              throw new NotFoundException('task not found');
            }
        
            return task;
          }
        
          async updateTaskStatus(id: string, status: Taskstatus) {
            // find the task by id
            const task = await this.getTaskById(id);
        
            // update the status
            task.status = status;
        
            // save the changes
            await task.save();
        
            return task;
          }

async deletetask(id:string){

    //Try deleting the task with id
     
    const result=await this.taskRepository.delete(id);

    //If affected rows are>0 =success
    if(result.affected==0){
        throw new NotFoundException('No task found');
    }
    return result;


    }
}


