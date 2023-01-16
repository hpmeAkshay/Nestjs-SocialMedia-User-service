import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Submodules/Nestjs-SocialMedia-Backend-Entities/src/entities/user.entity';
import { UserModule } from './Modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'Akshay.51postgres',
        database: 'nestjs_socialmedia',
        entities: [User],
        synchronize: false,
        logging: true,  //will show all the logs taking place, by typeorm
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}


//Migration :  process of running a set of querries together so as to create a structure of the database as we mention in the project 