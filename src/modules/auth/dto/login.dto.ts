import { UserCredentialsDTO } from '@common/dto/user-credentials.dto';

export class LoginReqDTO extends UserCredentialsDTO {}

export class LoginResDTO {
  jwtToken: string;
}
