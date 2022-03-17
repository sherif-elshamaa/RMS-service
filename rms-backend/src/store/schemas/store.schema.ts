import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { StoreStatus } from '../store-status.enum';

export type StoreDocument = Store & mongoose.Document;

@Schema()
export class Store {
  @Prop({ type: mongoose.Types.ObjectId })
  _id;
  @Prop({ type: mongoose.Types.ObjectId })
  userId;
  @Prop({ required: true })
  companyName: string;
  @Prop({ required: true })
  businessType: string;
  @Prop({ required: true })
  numberOfEmployees: number;
  @Prop({ required: true })
  businessNumber: string;
  @Prop({ required: true })
  address: string;
  @Prop({ required: true })
  country: string;
  @Prop({ required: true })
  city: string;
  @Prop({ required: true })
  zip: string;
  @Prop({ required: true })
  storeName: string;
  @Prop({ required: true })
  subscription: StoreStatus;
  @Prop({ required: true })
  fullName: string;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
