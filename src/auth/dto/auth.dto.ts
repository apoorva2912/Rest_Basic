import { IsEmail, IsNotEmpty, IsString, isNotEmpty, isString } from "class-validator";

export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email : string;

    @IsString()
    @IsNotEmpty()
    password : string;
}