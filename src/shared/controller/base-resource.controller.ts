import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BaseResourceService } from '../services/base-resource.service';

@Controller()
export class BaseResourceController<T extends BaseResourceService> {


    constructor(
        private service: T
    ) { }


    @Get()
    async getAll() {
        return await this.service.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number) {
        return await this.service.getById(id);
    }


    @Post()
    async create(@Body() category: T) {
        return await this.service.create(category);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() category: T) {
        return await this.service.update(id, category);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.service.delete(id);
    }
}
