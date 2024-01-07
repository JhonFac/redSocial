import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    fullName!: string;

    @IsNotEmpty()
    @IsNumber()
    age!: number;

    @IsNotEmpty()
    @IsString()
    email!: string;

    @IsNotEmpty()
    @IsString()
    password!: string;
}

export class UpdateUserDto {
    @IsString()
    fullName?: string;

    age?: number;

    @IsString()
    email?: string;

    @IsString()
    password?: string;
}
