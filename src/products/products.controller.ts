/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('api/products')
export class ProductsController {

      @Get()
      findAllProducts() {
            return "All products"
      }

      @Get(':id')
      findOneProduct(@Param('id') id: number){
            return `Product ${id}`
      }


      /* @Post()
      createProduct(){

      } */

}
