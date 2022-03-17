import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private userModel: mongoose.Model<UserDocument>,
  ) {}

  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { _id, username, password, role } = authCredentialsDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new this.userModel({
      _id,
      username,
      password: hashedPassword,
      role,
    });

    await user.save();
  }

  async findOne(username): Promise<User> {
    return this.userModel.findOne(username);
  }
}
