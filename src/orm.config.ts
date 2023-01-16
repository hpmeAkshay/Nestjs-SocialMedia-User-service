import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions={
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Akshay.51postgres',
    database: 'nestjs_socialmedia',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
}