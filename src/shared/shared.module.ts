import { BaseResourceController } from './controller/base-resource.controller';
import { Module } from '@nestjs/common';

import { BaseResourceService } from './services/base-resource.service';
import { ServiceModule } from './services/service.module';
import { ControlerModule } from './controller/controler.module';

@Module({
    imports: [
        ServiceModule,
        ControlerModule,
    ],
    exports: [
        ServiceModule,
        ControlerModule,
    ]
})
export class SharedModule {}
