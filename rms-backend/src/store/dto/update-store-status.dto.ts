import { IsEnum } from 'class-validator';
import { StoreStatus } from '../store-status.enum';

export class UpdateStoreStatusDto {
  @IsEnum(StoreStatus)
  subscription: StoreStatus;
}
