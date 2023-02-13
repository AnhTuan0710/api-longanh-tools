import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CustomerModel {
  @ApiPropertyOptional({ type: Number })
  customer_id?: number;
  @ApiProperty({ type: String })
  customer_name: string;
  @ApiProperty({ type: String })
  customer_address: string;
  @ApiProperty({ type: String })
  customer_phone: string;
  @ApiProperty({ type: String })
  amount_debt: string;
}