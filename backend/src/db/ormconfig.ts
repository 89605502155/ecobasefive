import { DataSource } from 'typeorm';

const connectionSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password:'qwerty',
    database: 'rusocean1',
    migrations:['./migrations/*{.ts,.js}'],
    entities:[__dirname + 'dist/**/*.entity{.ts,.js}'],
    synchronize: false
});
export default connectionSource;