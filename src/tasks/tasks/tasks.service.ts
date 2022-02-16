import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateTaskDTO } from './create.task.dto';
import { Task, Taskstatus } from './tasks.model';
import * as uuid from 'uuid';
import { SearchTaskDTO } from './search.task.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class TasksService {

    private tasks: Task[]=[];

    

    createtask(CreateTaskDTO:CreateTaskDTO){
        //generate new id
        const newid= uuid.v1()
        
        //create a new task
        const task:Task={
            id:newid,
            title: CreateTaskDTO.title,
            description:CreateTaskDTO.description,
            status:Taskstatus.OPEN,
        };

        //add task to task list
        this.tasks.push(task);
        return this.tasks;
    }

    getTasks(searchTaskDTO:SearchTaskDTO){
       const{search,status}=searchTaskDTO;
       let tasks=this.tasks

       //if the user has passed a search criteria search the task matching criteria

       if (search){

        tasks=tasks.filter(task=>{
           return task.title.includes(search) || task.description.includes(search); 
        })

       }

       if (search){

        tasks=tasks.filter(task=>{
           return task.status==status;
        })

       }

       return tasks;

    }



updatetaskstatus(id:string, status:Taskstatus){
    const task=this.tasks.find((task)=>{
        return task.id==id;
    });

    if(!task){
        throw new NotFoundException('Task not found');
    }

    task.status=status
    return task;
}

deletetask(id:string){
    //delete the task with the id

    const task=this.tasks.find((task)=>{
        return task.id==id;
    });

    if(!task){
        throw new NotFoundException('Task not found');
    }

    this.tasks=this.tasks.filter(task=>task.id!=id);

    
    return this.tasks;


}
}

