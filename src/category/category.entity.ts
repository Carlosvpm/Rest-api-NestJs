import { Entry } from 'src/entry/entry.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 250 })
  description: string;

  @OneToMany(type => Entry, entry => entry.category)
    entrys:  Entry[];;

}