import { IsDefined, IsEmail, IsEmpty, IsOptional, IsPhoneNumber, IsString, MinLength } from "class-validator";
import { IsNull } from "typeorm";


export class CreateUserDto {

    // @IsString()
    // first_name:string

    // @IsString()
    // surname:string

    // @IsString()
    // patronymic:string

    @IsPhoneNumber()
    @IsOptional()
    phone:string

    @IsEmail()
    @IsOptional()
    email:string

    @MinLength(6,{message:'Password must be more then 6 symbols'})
    password:string

}
