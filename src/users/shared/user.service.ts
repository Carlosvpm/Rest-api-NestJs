import { User } from './dto/user';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
    User: any;

    constructor(
        @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
    ) { }


    async getAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async getById(id: number): Promise<User> {
        const user = this.userRepository.findOne({ where: { id: id } });
        return user
    }


    async getByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({ where: { email: email } });
    }

    async create(user: User) {
        const createdUser = this.userRepository.create(user);
        await this.userRepository.save(user);
        return createdUser
    }


    async update(id: number, user: User) {
        await this.userRepository.update({ id }, user);
        return this.getById(id);
    }

    async delete(id: number) {
        await this.userRepository.delete({ id })
        return { deleted: true }
    }

}
