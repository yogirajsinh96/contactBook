import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiHeader, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
// import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { ContactDetailsService } from './contact-details.service';
import { CreateContactDetailDto } from './dto/create-contact-detail.dto';
import { UpdateContactDetailDto } from './dto/update-contact-detail.dto';

@ApiTags('contact details')
// @ApiHeader({ name: 'contact Details', description: 'demo dmeo' })
@Controller('contact-details')
export class ContactDetailsController {
  constructor(private readonly contactDetailsService: ContactDetailsService) {}

  // @UseGuards(JwtAuthGuard)
  @Post('add')
  create(@Body() createContactDetailDto: CreateContactDetailDto) {
    return this.contactDetailsService.create(createContactDetailDto);
  }

  @Post('addbulk')
  createBulk(@Body() createContactDetailDto: any) {
    console.time('time');
    // console.log(createContactDetailDto);
    let a = JSON.parse(createContactDetailDto.data);
    return this.contactDetailsService.createBulk(a);
  }

  // @UseGuards(JwtAuthGuard)
  @Get('get')
  findAll(@Query('id') id: string) {
    return this.contactDetailsService.findAll(id);
  }

  @Get('getall')
  getAll() {
    return this.contactDetailsService.getAll();
  }

  @Get('count')
  getCount() {
    // console.log('dcd');
    return this.contactDetailsService.getCount();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContactDetailDto: UpdateContactDetailDto
  ) {
    // console.log(updateContactDetailDto);
    return this.contactDetailsService.update(+id, updateContactDetailDto);
  }

  @Patch('update/:id')
  updateTag(@Param('id') id: string, @Body() updateContactDetailDto: { tag }) {
    // console.log(updateContactDetailDto);
    return this.contactDetailsService.updateTag(
      +id,
      updateContactDetailDto.tag
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactDetailsService.remove(+id);
  }

  @Delete('user/:id')
  removeUser(@Param('id') id: string) {
    return this.contactDetailsService.removeUser(+id);
  }
}
