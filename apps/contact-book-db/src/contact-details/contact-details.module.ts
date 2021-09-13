import { Module } from '@nestjs/common';
import { ContactDetailsService } from './contact-details.service';
import { ContactDetailsController } from './contact-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactDetail } from './entities/contact-detail.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ContactDetail])],
  controllers: [ContactDetailsController],
  providers: [ContactDetailsService]
})
export class ContactDetailsModule {}
