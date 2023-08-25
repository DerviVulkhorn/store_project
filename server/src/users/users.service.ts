import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from "argon2";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ){}


  async create(createUserDto: CreateUserDto) {
    const checkUsers = await this.userRepository.findOne({
      where:{
        email: createUserDto.email,
        phone: createUserDto.phone
      },
    })
    if(checkUsers) throw new BadRequestException('Such a user already exists.')

    const user = await this.userRepository.save({
      email:createUserDto.email,
      phone:createUserDto.phone,
      password: await argon2.hash(createUserDto.password),
      id_role: 3
    })

    return {user};
  }
  //////////////////////////////////////////////////
  findAll() {
    return `This action returns all users`;
  }
  ////////////////////////////////////////////////////
  async findOne(email: string) {
    return await this.userRepository.findOne({
      where:{
        email:email,
      }
    })
    
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
