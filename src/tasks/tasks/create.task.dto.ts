import {IsNotEmpty} from 'class-validator';

//Data tranfer object used to tranfer data from one to another entity
export class CreateTaskDTO{

@IsNotEmpty()
    title: string;

@IsNotEmpty()
    description: string;

}