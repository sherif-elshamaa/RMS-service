import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { UserRole } from '../user-role.enum';

export type UserDocument = User & mongoose.Document;
@Schema()
export class User {
  @Prop({ type: mongoose.Types.ObjectId })
  _id;
  @Prop({ required: true, unique: true })
  username: string;
  @Prop({ required: true })
  password: string;
  @Prop({ default: UserRole.SUBSCRIPER })
  role: UserRole;
}
export const UserSchema = SchemaFactory.createForClass(User);
