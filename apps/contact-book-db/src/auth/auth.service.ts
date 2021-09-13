import { Injectable } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInfo } from '../user/user.entity';
// import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserInfo) private userinfo: Repository<UserInfo>,
    // private readonly usersService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async getLogin(username: string, password: string) {
    // console.log('in service');
    return await this.userinfo.findOne({
      where: [
        {
          userEmail: username,
          userPassword: password,
        },
      ],
    });
  }

  async validateUser(username: string, pass: string): Promise<any> {
    // console.log('rfein');
    const user = await this.getLogin(username, pass);
    if (user && user.userPassword === pass) {
      const { userPassword, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.userName, sub: user.userId };
    return {
      username: payload.username,
      userid: payload.sub,
      access_token: this.jwtService.sign(payload),
    };
  }
}
