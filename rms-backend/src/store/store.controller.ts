import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  HttpCode,
  UseGuards,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/schemas/user.schema';
import { CreateStoreDto } from './dto/create-store.dto';
import { GetStoreFilterDto } from './dto/get-store-filter.dto';
import { UpdateStoreStatusDto } from './dto/update-store-status.dto';
import { Store } from './schemas/store.schema';
import { StoreService } from './store.service';

@Controller('store')
@UseGuards(AuthGuard())
export class StoreController {
  constructor(private storeService: StoreService) {}

  @Get()
  async getStores(
    @Query() filterDto: GetStoreFilterDto,
    @GetUser() user: User,
  ): Promise<Store[]> {
    if (Object.keys(filterDto).length) {
      return this.storeService.storeSearch(filterDto, user);
    } else {
      return this.storeService.getStores(user);
    }
  }

  @Post()
  @HttpCode(201)
  createStore(
    @Body() createStoreDto: CreateStoreDto,
    @GetUser() user: User,
  ): Promise<Store> {
    if (user.role !== 'ADMIN') {
      throw new NotFoundException();
    } else {
      return this.storeService.createStore(createStoreDto);
    }
  }
  @Get('/:_id')
  getStoreById(
    @Param('_id') _id: string,
    @GetUser() user: User,
  ): Promise<Store> {
    return this.storeService.getStoreById(_id, user);
  }

  @Put('/:_id')
  updateStoreStatus(
    @Param('_id') _id: string,
    @Body() updateStoreStatusDto: UpdateStoreStatusDto,
    @GetUser() user: User,
  ): Promise<Store> {
    const { subscription } = updateStoreStatusDto;
    return this.storeService.updateStoreStatus(_id, subscription, user);
  }

  @Delete('/:_id')
  @HttpCode(204)
  async deleteStore(@Param('_id') _id: string, @GetUser() user: User) {
    const found = await this.storeService.deleteStore(_id, user);
    if (!found) {
      throw new NotFoundException();
    }
  }
}
