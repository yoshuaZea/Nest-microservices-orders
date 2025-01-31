import { IsString, IsUUID, IsUrl } from 'class-validator';

export class PaidOrderDto {
  @IsString()
  stripePaymendId: string;

  @IsString()
  @IsUUID()
  orderId: string;

  @IsString()
  @IsUrl()
  receiptUrl: string;
}
