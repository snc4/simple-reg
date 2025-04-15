import { UserDTO } from '@common/dto/user.dto';
import { User } from '../entities';

export interface IUserRepository {
  create(user: UserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findAll(): Promise<User[]>;
}
