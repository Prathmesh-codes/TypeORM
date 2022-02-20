import { EntityRepository, Repository } from "typeorm";
import { CreateTaskDTO } from "./create.task.dto";
import { SearchTaskDTO } from "./search.task.dto";
import { TaskEntity } from "./task.entity";
import { Taskstatus } from "./task.enum";

@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity>{



async getTasks(SearchTaskDTO:SearchTaskDTO){

const { search, status}=SearchTaskDTO;

//Create a query builder
const query=this.createQueryBuilder('task');

//Search by status
if(status){

    query.andWhere('task.status=:status',{status:status});
}


//Search by title
if(search){

    query.andWhere(`(task.title LIKE:search) OR (task.description LIKE:search)`,
    {
        search:`%${search}%`},
    );
}


//execute the query
return await query.getMany();

}


async createTask(CreateTaskDTO:CreateTaskDTO){

//Create a row in task table(Task Entity)
const task=new TaskEntity()
task.title=CreateTaskDTO.title
task.description=CreateTaskDTO.description
task.status=Taskstatus.OPEN

//Create a new row in the task table
await task.save();


return task;

}
// updateTask(){}
}