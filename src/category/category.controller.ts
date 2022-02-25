import { CategoryService } from './services/category.service';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Category } from './entities/category.entity';

@Controller('api/categories')
export class CategoryController {
      constructor(private categoryService: CategoryService) { }

      @Get()
      async getAll(): Promise<Category[]> {
            return await this.categoryService.getAll();
      }

      @Get(':id')
      async getById(@Param('id') id: number) {
            return await this.categoryService.getById(id);
      }


      @Post()
      async create(@Body() category: Category) {
            return await this.categoryService.create(category);
      }

      @Put(':id')
      async update(@Param('id') id: number, @Body() category: Category) {
            return await this.categoryService.update(id, category);
      }


}
