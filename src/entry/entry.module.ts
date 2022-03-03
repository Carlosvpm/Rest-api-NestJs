import { Entry } from './entry.entity';
import { EntryService } from './entry.service';
import { EntryController } from './entry.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Entry])],
    providers: [EntryService],
    controllers: [EntryController],
    exports: [EntryService]
})
export class EntryModule { }
