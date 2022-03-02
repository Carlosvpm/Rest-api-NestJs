import { ApiProperty } from '@nestjs/swagger';
import { Entry } from 'src/entry/entry.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Category {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ length: 150 })
  name: string;



  @ApiProperty()
  @Column({ length: 250 })
  description: string;

  @ApiProperty()
  @OneToMany(type => Entry, entry => entry.category)
  entrys: Entry[];

}