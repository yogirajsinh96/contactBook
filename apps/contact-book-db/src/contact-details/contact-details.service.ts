import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { count, table } from 'console';
import { Repository } from 'typeorm';
import { CreateContactDetailDto } from './dto/create-contact-detail.dto';
import { UpdateContactDetailDto } from './dto/update-contact-detail.dto';
import { ContactDetail } from './entities/contact-detail.entity';

@Injectable()
export class ContactDetailsService {
  constructor(
    @InjectRepository(ContactDetail)
    private contactDetailObj: Repository<ContactDetail>
  ) {}

  create(createContactDetailDto: CreateContactDetailDto) {
    return this.contactDetailObj.save(createContactDetailDto);
  }

  async createBulk(createContactDetailDto: CreateContactDetailDto[]) {
    // for (let i = 0; i < createContactDetailDto.length; i++) {
    //   await this.contactDetailObj.save(createContactDetailDto[i]);
    // }
    await this.contactDetailObj.save(createContactDetailDto);
    console.timeEnd('time');
  }

  findAll(id: string) {
    return this.contactDetailObj.find({
      where: {
        userId: id,
      },
    });
  }

  getAll() {
    return this.contactDetailObj.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} contactDetail`;
  }

  async update(id: number, updateContactDetailDto: UpdateContactDetailDto) {
    let data = await this.contactDetailObj.findOne({
      where: [
        {
          contactId: id,
        },
      ],
    });
    data.email = updateContactDetailDto.email;
    data.contatcName = updateContactDetailDto.contatcName;
    data.contactQualification = updateContactDetailDto.contactQualification;
    data.contactMobile = updateContactDetailDto.contactMobile;
    data.tag = updateContactDetailDto.tag;

    return await this.contactDetailObj.save(data);
  }

  async updateTag(id: number, tag: string) {
    let data = await this.contactDetailObj.findOne({
      where: [
        {
          contactId: id,
        },
      ],
    });
    data.tag = tag;
    return await this.contactDetailObj.save(data);
  }

  async remove(id: number) {
    let data = await this.contactDetailObj.findOne({
      where: [
        {
          contactId: id,
        },
      ],
    });
    return await this.contactDetailObj.remove(data);
  }

  async removeUser(id: number) {
    let data = await this.contactDetailObj.find({
      where: [
        {
          userId: id,
        },
      ],
    });
    return await this.contactDetailObj.remove(data);
  }
  async getCount() {
    return { count: await (await this.contactDetailObj.find()).length };
  }
}
