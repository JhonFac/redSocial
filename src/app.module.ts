import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { Post } from './models/post.model';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';

@Module({
    imports: [
        SequelizeModule.forRoot({
            username: 'postgres',
            password: 'dfDAbFE22BbABd5-AcFG2eagE-B6fgdc',
            database: 'railway',
            host: 'viaduct.proxy.rlwy.net',
            dialect: 'postgres',
            port: 33063,
            autoLoadModels: true,
            synchronize: true,
        }),
        SequelizeModule.forFeature([User, Post]),
    ],
    controllers: [UserController, PostController],
    providers: [UserService, PostService],
    exports: [UserService, PostService],
})
export class Exports { }