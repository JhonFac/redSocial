import { Column, DataType, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model';

@Table
export class Post extends Model<Post> {
    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    title!: string

    @Column({
        allowNull: false,
        type: DataType.TEXT,
    })
    content!: string

    @Column({
        allowNull: false,
        type: DataType.INTEGER,
    })
    like!: number

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    userId!: number;

    @BelongsTo(() => User)
    user!: User;
}
