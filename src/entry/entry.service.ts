import { InjectRepository } from '@nestjs/typeorm';
import { Entry } from 'src/entry/entry.entity';
/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class EntryService {

    constructor(
        @InjectRepository(Entry) private entryRepository: Repository<Entry>,
    ) { }


    async getAll(): Promise<Entry[]> {
        return this.entryRepository.find();
    }

    async getById(id: number): Promise<Entry> {
        return this.entryRepository.findOne({ where: { id: id } });
    }

    async create(entry: Entry) {
        const createdEntry = this.entryRepository.create(entry);
        await this.entryRepository.save(entry);
        return createdEntry
    }


    async update(id: number, entry: Entry) {
        await this.entryRepository.update({ id }, entry);
        return this.getById(id);
    }

    async delete(id: number) {
        await this.entryRepository.delete({ id })
        return { deleted: true }
    }
}
