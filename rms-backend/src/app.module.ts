import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from './store/store.module';
import { MONGO } from './app.properties';

@Module({
  imports: [MongooseModule.forRoot(MONGO), StoreModule, AuthModule],
})
export class AppModule {}
