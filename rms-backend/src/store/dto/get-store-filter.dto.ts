import { IsEnum, IsOptional, IsString } from 'class-validator';
import { StoreStatus } from '../store-status.enum';

export class GetStoreFilterDto {
  @IsOptional()
  @IsEnum(StoreStatus)
  subscription?: StoreStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
