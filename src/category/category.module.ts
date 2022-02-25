import { CategoryService } from './services/category.service';
import { CategoryController } from './category.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CategoryProviders } from './category.providers';

@Module({
    imports: [DatabaseModule],
    providers: [...CategoryProviders, CategoryService],
    controllers: [CategoryController],
    exports: [CategoryService]
})
export class CategoryModule { }
