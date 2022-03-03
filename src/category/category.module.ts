import { Category } from './category.entity';
import { CategoryProviders } from './category.providers';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [DatabaseModule, TypeOrmModule.forFeature([Category])],
    providers: [...CategoryProviders, CategoryService],
    controllers: [CategoryController],
    exports: [CategoryService]
})
export class CategoryModule { }
