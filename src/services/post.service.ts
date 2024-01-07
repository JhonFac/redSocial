import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from '../models/post.model';
import { CreatePostDto, UpdatePostDto } from '../dto/post.dto';

@Injectable()
export class PostService {
    constructor(@InjectModel(Post) private postModel: typeof Post) { }

    findAll() {
        return this.postModel.findAll();
    }

    findOne(id: string) {
        return this.postModel.findByPk(id);
    }

    create(createPostDto: CreatePostDto) {
        const { title, content, like, userId } = createPostDto;
        return this.postModel.create({ title, content, like, userId } as Post);
    }

    update(id: string, updatePostDto: UpdatePostDto) {
        return this.postModel.update(updatePostDto, { where: { id } });
    }

    remove(id: string) {
        return this.postModel.destroy({ where: { id } });
    }
}
