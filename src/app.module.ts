/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentModule } from './document/document.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [DocumentModule,UserModule, MongooseModule.forRoot('mongodb://localhost:27017/IDMProcess')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
