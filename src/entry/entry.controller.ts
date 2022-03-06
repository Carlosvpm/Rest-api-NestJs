import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Entry } from 'src/entry/entry.entity';
import { createBaseController } from 'src/shared/controller/base-resource.controller';
import { EntryService } from './entry.service';

@ApiTags('Entries')
@Controller('api/entries')
export class EntryController extends createBaseController(EntryService){}


