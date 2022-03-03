import { BaseResourceService } from './base-resource.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [
        BaseResourceService
    ],
})
export class ServiceModule {}
