
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Entry } from 'src/entry/entry.entity';
import { EntryService } from './entry.service';

@Controller('api/entries')
export class EntryController {


    constructor(private entryService: EntryService) { }

    @Get()
    async getAll(): Promise<Entry[]> {
        return await this.entryService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number) {
        return await this.entryService.getById(id);
    }


    @Post()
    async create(@Body() entry: Entry) {
        return await this.entryService.create(entry);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() entry: Entry) {
        return await this.entryService.update(id, entry);
    }


    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.entryService.delete(id);
    }


}


