import { EntryProviders } from './entry.providers';
import { EntryService } from './entry.service';
import { EntryController } from './entry.controller';

/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [...EntryProviders, EntryService],
    controllers: [EntryController],
    exports: [EntryService]
})
export class EntryModule { }
