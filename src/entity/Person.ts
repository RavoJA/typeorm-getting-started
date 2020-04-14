import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    address: string;
    
    @Column()
    email: string

}
