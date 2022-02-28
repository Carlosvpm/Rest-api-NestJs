
import { Connection } from 'typeorm';
import { Category } from './category.entity';



export const CategoryProviders = [
  {
    provide: 'CATEGORY_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Category),
    inject: ['DATABASE_CONNECTION'],
  },
];