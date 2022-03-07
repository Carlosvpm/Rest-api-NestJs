import { ICrudController } from './model/base-resource-controller';
import { Body, Delete, Get, Param, Post, Put, Inject, Type, UseGuards } from '@nestjs/common';
import { BaseEntity } from 'typeorm/repository/BaseEntity';
import { ICrudService } from '../services/models/baseCrudService';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';



export function createBaseController(service: ICrudService): Type<ICrudController> {
    class BaseResourceController {
        @Inject(service) private readonly service;
        

        @UseGuards(JwtAuthGuard)
        @Get()
        async getAll() {
            return await this.service.getAll();
        }

        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async getById(@Param('id') id: number) {
            return await this.service.getById(id);
        }

        @UseGuards(JwtAuthGuard)
        @Post()
        async create(@Body() resource: BaseEntity) {
            return await this.service.create(resource);
        }

        @UseGuards(JwtAuthGuard)
        @Put(':id')
        async update(@Param('id') id: number, @Body() resource: BaseEntity) {
            return await this.service.update(id, resource);
        }

        @UseGuards(JwtAuthGuard)
        @Delete(':id')
        async delete(@Param('id') id: number) {
            return await this.service.delete(id);
        }
    }
    return BaseResourceController; 
}

