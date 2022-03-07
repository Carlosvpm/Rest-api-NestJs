import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;


    @ApiProperty()
    @Column({ length: 100 })
    username: string;

    @ApiProperty()
    @Column({ length: 25 })
    password: string;
}