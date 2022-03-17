import { IsNotEmpty, IsEnum } from 'class-validator';
import { StoreStatus } from '../store-status.enum';
import * as mongoose from 'mongoose';

export class CreateStoreDto {
  @IsNotEmpty()
  _id: mongoose.Types.ObjectId;
  @IsNotEmpty()
  userId: mongoose.Types.ObjectId;
  @IsNotEmpty()
  companyName: string;
  @IsNotEmpty()
  businessType: string;
  @IsNotEmpty()
  numberOfEmployees: number;
  @IsNotEmpty()
  businessNumber: string;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  country: string;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  zip: string;
  @IsNotEmpty()
  storeName: string;
  @IsNotEmpty()
  @IsEnum(StoreStatus)
  subscription: StoreStatus;
  @IsNotEmpty()
  fullName: string;
}
