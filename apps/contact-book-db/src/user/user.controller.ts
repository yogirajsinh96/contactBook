import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { user } from './interface';
// import { LocalStrategy } from 'src/auth/strategies/local.strategy';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(LocalAuthGuard)
  @Get('login')
  login(@Request() req) {
    // console.log('rfgvae');
    // return this.userService.getLogin(email, password);
    console.log(req.user);
    return;
  }

  @Get('count')
  getCount() {
    return this.userService.getCount();
  }

  @Get('get')
  getUser() {
    return this.userService.getUsert();
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    console.log(id);
    return this.userService.delete(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: user) {
    // console.log(data);
    return this.userService.update(id, data);
  }
}
