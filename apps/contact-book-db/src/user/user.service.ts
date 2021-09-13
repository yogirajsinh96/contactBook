import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInfo } from './user.entity';
import { Repository } from 'typeorm';
import { user } from './interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserInfo)
    private userService: Repository<UserInfo>
  ) {}
  async getLogin(username: string, password: string) {
    console.log('in service');
    return await this.userService.findOne({
      where: [
        {
          userEmail: username,
          userPassword: password,
        },
      ],
    });
  }

  async getCount() {
    return { count: await (await this.userService.find()).length };
  }

  async getUsert() {
    return await this.userService.find({
      select: ['userId', 'userName', 'userEmail'],
    });
  }

  async delete(id) {
    let user = await this.userService.find({
      where: [
        {
          userId: id,
        },
      ],
    });

    return await this.userService.remove(user);
  }

  async update(id: string, data: user) {
    let user = await this.userService.findOne({
      where: [
        {
          userId: id,
        },
      ],
    });
    // console.log(user);

    user.userName = data.name;
    user.userEmail = data.email;
    // console.log(user);
    return await this.userService.save(user);
  }
}
