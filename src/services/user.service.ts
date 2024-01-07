import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/user.model';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userModel: typeof User) { }

    findAll() {
        return this.userModel.findAll();
    }

    findOne(id: string) {
        return this.userModel.findByPk(id);
    }

    create(createUserDto: CreateUserDto) {
        const { fullName, age, email, password } = createUserDto;
        return this.userModel.create({ fullName, age, email, password } as User);
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        return this.userModel.update(updateUserDto, { where: { id } });
    }

    remove(id: string) {
        return this.userModel.destroy({ where: { id } });
    }
}
