import { User } from './user.entity';
import { createResourceService } from 'src/shared/services/base-resource.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService extends createResourceService(User) {




    getByUserName(username: string): User {
        return this.resourceRepository.findOne({ where: { username: username } });

    }

}
