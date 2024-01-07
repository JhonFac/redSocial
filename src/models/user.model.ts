import { Table, Column, Model, HasMany, DataType } from 'sequelize-typescript';
import { Post } from './post.model';

@Table
export class User extends Model<User> {
    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    fullName!: string

    @Column({
        allowNull: false,
        type: DataType.INTEGER,
    })
    age!: number

    @Column({
        allowNull: false,
        unique: true,
        type: DataType.STRING,
    })
    email!: string

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    password!: string

    @HasMany(() => Post)
    posts!: Post[]
}
