import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateContactDetailDto } from './create-contact-detail.dto';

export class UpdateContactDetailDto extends PartialType(
  CreateContactDetailDto,
) {
  @ApiProperty()
  contatcName: string;

  @ApiProperty()
  contactQualification: string;

  @ApiProperty()
  contactMobile: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  tag?: string;
}
