import { BaseResourceController } from './../shared/controller/base-resource.controller';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@ApiTags('Categories')
@Controller('api/categories')
export class CategoryController extends BaseResourceController<CategoryService> {

      constructor(
            private categoryService: CategoryService
      ) {
            super(categoryService)
      }
}
