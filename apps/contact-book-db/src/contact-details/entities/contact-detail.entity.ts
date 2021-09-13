import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contactDetails')
export class ContactDetail {
  @PrimaryGeneratedColumn()
  contactId: number;

  @Column()
  userId: number;

  @Column()
  contatcName: string;

  @Column()
  contactQualification: string;

  @Column()
  contactMobile: string;

  @Column()
  email: string;

  @Column()
  tag: string;
}
