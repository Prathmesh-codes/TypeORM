import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as crypto from 'crypto-js'
@Entity('User')
@Unique(['username'])
export class UserEntity extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username:string

    @Column()
    password:string

    async validatePassword(password:string){

        const encrypted=`${crypto.MD5(password)}`
        return encrypted==this.password;

    }
}