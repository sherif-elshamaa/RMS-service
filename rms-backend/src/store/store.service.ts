import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { GetStoreFilterDto } from './dto/get-store-filter.dto';
import { StoreRepository } from './store.repository';
import { Store } from './schemas/store.schema';
import { StoreStatus } from './store-status.enum';
import { User } from 'src/auth/schemas/user.schema';

@Injectable()
export class StoreService {
  constructor(private storesRepository: StoreRepository) {}

  async getStores(user: User): Promise<Store[]> {
    return await this.storesRepository.findAll(user);
  }

  async createStore(createStoreDto: CreateStoreDto): Promise<Store> {
    return await this.storesRepository.createStore(createStoreDto);
  }

  async storeSearch(filterDto: GetStoreFilterDto, user: User) {
    return await this.storesRepository.findWithFilter(filterDto, user);
  }

  async getStoreById(_id: string, user: User): Promise<Store> {
    const store = await this.storesRepository.findOne(_id, user);
    if (!store) {
      throw new NotFoundException();
    }
    return store;
  }

  async updateStoreStatus(
    _id: string,
    subscription: StoreStatus,
    user: User,
  ): Promise<Store> {
    return await this.storesRepository.updateStatus(_id, subscription, user);
  }

  async deleteStore(_id: string, user: User) {
    return await this.storesRepository.deleteStore(_id, user);
  }
}
