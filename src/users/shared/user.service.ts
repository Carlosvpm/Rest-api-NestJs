import { User } from './user';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class UserService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<User>
    ) { }


    async getAll() {
        return await this.userModel.find().exec();
    }

    async getById(id: string) {
        const user = this.userModel.findById(id).exec();
        return await user
    }


    async getByEmail(email: string) {
        return await this.userModel.findOne({ email }).exec();

    }

    async create(user: User) {
        const createdUser = new this.userModel(user);
        return await createdUser.save();
    }


    async update(id: string, user: User) {
        await this.userModel.updateOne({ _id: id }, user).exec();
        return this.getById(id);
    }

    async delete(id: string) {
        return await this.userModel.deleteOne({ _id: id }).exec()
    }








}
