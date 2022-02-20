import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Taskstatus } from "./task.enum";


@Entity('Task')
export class TaskEntity extends BaseEntity{

@PrimaryGeneratedColumn()
id: number;

@Column()
title: string;

@Column()
description:string;

@Column()
status:Taskstatus;

}