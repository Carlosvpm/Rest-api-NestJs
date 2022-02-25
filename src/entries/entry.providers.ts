import { Entry } from 'src/entries/entities/entry.entity';
import { Connection } from 'typeorm';

export const EntryProviders = [
    {
      provide: 'ENTRY_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(Entry),
      inject: ['DATABASE_CONNECTION'],
    },
  ];