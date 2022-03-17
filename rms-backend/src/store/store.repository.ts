import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStoreDto } from './dto/create-store.dto';
import { GetStoreFilterDto } from './dto/get-store-filter.dto';
import { Store, StoreDocument } from './schemas/store.schema';
import { Injectable } from '@nestjs/common';
import { StoreStatus } from './store-status.enum';
import { User } from 'src/auth/schemas/user.schema';

@Injectable()
export class StoreRepository {
  constructor(
    @InjectModel(Store.name) private storeModel: Model<StoreDocument>,
  ) {}

  async findAll(user: User): Promise<Store[]> {
    const stores = await this.storeModel.find({ userId: user._id.toString });
    return stores;
  }

  async findWithFilter(filter: GetStoreFilterDto, user: User) {
    const subscription = Object.is(filter.subscription, undefined)
      ? ''
      : filter.subscription;
    const search = Object.is(filter.search, undefined) ? '' : filter.search;

    return await this.storeModel.find({
      $and: [
        { storeName: { $regex: search } },
        { subscription: { $regex: subscription } },
        { userId: { $eq: user._id.toString() } },
      ],
    });
  }

  async findOne(_id: string, user: User): Promise<Store> {
    return await this.storeModel.findOne({
      $and: [{ _id }, { userId: user._id.toString() }],
    });
  }

  async createStore(createStoreDto: CreateStoreDto): Promise<Store> {
    const newStore = new this.storeModel(createStoreDto);
    console.log(newStore);
    await newStore.save();
    return newStore;
  }

  async updateStatus(
    _id: string,
    subscription: StoreStatus,
    user: User,
  ): Promise<Store> {
    return await this.storeModel.findOneAndUpdate(
      { $and: [{ _id }, { userId: user._id.toString() }] },
      { subscription },
      { new: true },
    );
  }
  async deleteStore(_id: string, user: User) {
    return await this.storeModel.findOneAndDelete({
      $and: [{ _id }, { userId: user._id.toString() }],
    });
  }
}
