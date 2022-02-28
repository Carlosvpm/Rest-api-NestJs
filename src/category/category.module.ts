import { CategoryProviders } from './category.providers';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [...CategoryProviders, CategoryService],
    controllers: [CategoryController],
    exports: [CategoryService]
})
export class CategoryModule { }
