/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm/repository/Repository";
import { Category } from "./category.entity";



@Injectable()
export class CategoryService {


    constructor(
        @Inject('CATEGORY_REPOSITORY') private categoryRepository: Repository<Category>,
    ) { }


    async getAll(): Promise<Category[]> {
        return this.categoryRepository.find();
    }

    async getById(id: number): Promise<Category> {
        return this.categoryRepository.findOne({ where: { id: id } });
    }

    async create(category: Category) {
        const createdCategory = this.categoryRepository.create(category);
        await this.categoryRepository.save(category);
        return createdCategory
    }


    async update(id: number, category: Category) {
        await this.categoryRepository.update({ id }, category);
        return this.getById(id);
    }

    async delete(id: number) {
        await this.categoryRepository.delete({ id })
        return { deleted: true }
    }
}
