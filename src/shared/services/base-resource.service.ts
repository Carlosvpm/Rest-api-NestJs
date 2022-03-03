import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseResourceService {

    constructor() { }

    getAll() { }

    getById(id: number) { }

    create(category) { }


    update(id: number, category) { }

    delete(id: number) { }
}
