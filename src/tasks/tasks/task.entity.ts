import { UserModule } from "src/user/user.module";
import { UserEntity } from "src/user/user/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

@ManyToOne(type=>UserEntity, user=>user.tasks,{eager:false})
user: UserEntity;

@Column()
userId: number;

}