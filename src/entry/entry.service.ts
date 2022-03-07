import { createResourceService } from 'src/shared/services/base-resource.service';
import { Entry } from 'src/entry/entry.entity';
import {  Injectable } from '@nestjs/common';


@Injectable()
export class EntryService extends createResourceService(Entry) {}
