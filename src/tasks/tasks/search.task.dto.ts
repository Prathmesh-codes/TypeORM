import {IsNotEmpty} from 'class-validator';
import { Taskstatus } from './task.enum';

//Data tranfer object used to tranfer data from one to another entity
export class SearchTaskDTO{


    search: string;


    status: Taskstatus;

}