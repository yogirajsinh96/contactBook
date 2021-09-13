import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ContactDetailsModule } from './contact-details/contact-details.module';
// import { AuthenticationModule } from './authentication/authentication.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { UserModule } from './user/user.module';
import { getConnectionOptions } from 'typeorm';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'contactbook',
      entities: ['dist/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: false,
    }),
    ContactDetailsModule,
    // AuthenticationModule,
    AnnouncementsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
