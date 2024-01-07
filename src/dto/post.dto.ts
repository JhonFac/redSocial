// src/dto/post.dto.ts
export class CreatePostDto {
    title?: string;
    content?: string;
    like?: number;
    userId?: number;
}

export class UpdatePostDto {
    title?: string;
    content?: string;
    like?: number;
}
