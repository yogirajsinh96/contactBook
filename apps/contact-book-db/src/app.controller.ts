import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
// import { LocalStrategy } from './authentication/local.strategy';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseGuards(LocalStrategy)
  @Get('login')
  getHello(): string {
    return this.appService.getHello();
  }
}
