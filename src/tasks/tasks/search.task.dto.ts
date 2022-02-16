import {IsNotEmpty} from 'class-validator';
import { Taskstatus } from './tasks.model';

//Data tranfer object used to tranfer data from one to another entity
export class SearchTaskDTO{


    search: string;


    status: Taskstatus;

}