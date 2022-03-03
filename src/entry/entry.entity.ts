import { Category } from './../category/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Entry {
  
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
  @Column()
  amount: string;

  @ApiProperty()
  @Column({ length: 250 })
  date: string;

  @ApiProperty()
  @Column()
  paid: number;

  @ApiProperty()
  @Column()
  categoryId: number;

  @JoinColumn({ name: "categoryId", referencedColumnName: "id" })
  @ManyToOne(type => Category, category => category.entrys)
  category: Category;


}