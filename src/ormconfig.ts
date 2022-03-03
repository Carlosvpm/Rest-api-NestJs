import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";



export const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '161926',
    database: 'finansys',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: true,
};

