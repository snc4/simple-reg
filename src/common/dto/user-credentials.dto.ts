import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class UserCredentialsDTO {
  @ApiProperty()
  @IsEmail()
  public readonly email: string;

  @ApiProperty()
  public readonly password: string;
}
