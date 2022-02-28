import { Category } from './../category/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Entry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 250 })
  description: string;


  @Column()
  amount: string;

  @Column({ length: 250 })
  date: string;


  @Column()
  paid: number;

  @Column()
  categoryId: number;

  @JoinColumn({ name: "categoryId", referencedColumnName: "id" })
  @ManyToOne(type => Category, category => category.entrys)
  category: Category;

 
}