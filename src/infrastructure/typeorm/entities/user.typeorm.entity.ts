import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { IUser } from '@user/domain/interfaces/user.interface';

@Entity('app_user')
export class UserTypeormEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 320, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 50 })
  passwordHash: string;
}
