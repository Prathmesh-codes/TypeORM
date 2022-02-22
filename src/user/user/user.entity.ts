import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as crypto from 'crypto-js'
import { TaskEntity } from "src/tasks/tasks/task.entity";
@Entity('User')
@Unique(['username'])
export class UserEntity extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username:string

    @Column()
    password:string
//One user may have multiple tasks
    @OneToMany(type=>TaskEntity,task=>task.user,{eager:true})
    tasks:TaskEntity[];
    async validatePassword(password:string){

        const encrypted=`${crypto.MD5(password)}`
        return encrypted==this.password;

    }
}