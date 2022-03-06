import { Body, Controller} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { createBaseController } from 'src/shared/controller/base-resource.controller';
import { CategoryService } from './category.service';

@ApiTags('Categories')
@Controller('api/categories')
export class CategoryController extends createBaseController(CategoryService) {}
