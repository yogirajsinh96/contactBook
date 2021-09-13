import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_info')
export class UserInfo
{
    @PrimaryGeneratedColumn()
    userId:string;

    @Column()
    userName:string;

    @Column()
    userPassword:string;

    @Column()
    userEmail:string;
}