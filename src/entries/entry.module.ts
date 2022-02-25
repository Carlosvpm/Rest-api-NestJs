import { EntryService } from './services/entry.service';
import { EntryController } from './entry.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { EntryProviders } from './entry.providers';


@Module({
    imports: [DatabaseModule],
    providers: [
        EntryService,
        ...EntryProviders
    ],
    controllers: [
        EntryController
    ],
    exports: [
        EntryService
    ]
})
export class EntryModule { }
