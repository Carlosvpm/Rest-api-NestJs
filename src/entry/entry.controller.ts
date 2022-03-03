import { BaseResourceController } from './../shared/controller/base-resource.controller';

/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Entry } from 'src/entry/entry.entity';
import { EntryService } from './entry.service';

@ApiTags('Entries')
@Controller('api/entries')
export class EntryController extends BaseResourceController<EntryService>{


    constructor(
        private entryService: EntryService
    ) {
        super(entryService)
    }


}


