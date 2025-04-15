import { IUser } from '@user/domain/interfaces/user.interface';

export class UserDTO implements Omit<IUser, 'id'> {
  email: string;
  passwordHash: string;
}
