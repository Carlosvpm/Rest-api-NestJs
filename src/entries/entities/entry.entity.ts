import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Entry {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150 })
    name: string;

    @Column({ length: 250 })
    description: string;

    @Column()
    type: string;

    @Column()
    amount: string;

    @Column({ type: Date })
    date: Date;


    @Column()
    paid: boolean;

    @Column()
    categoryId: number;

}

