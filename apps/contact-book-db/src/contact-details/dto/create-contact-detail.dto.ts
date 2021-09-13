import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDetailDto {
  @ApiProperty()
  contactId?: number;

  @ApiProperty()
  userId: number;

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
