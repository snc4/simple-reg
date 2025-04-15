import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CryptoService {
  private readonly SALT_ROUNDS = 10;

  async hash(str: string): Promise<string> {
    return await bcrypt.hash(str, this.SALT_ROUNDS);
  }

  async compare(str: string, hashedStr: string): Promise<boolean> {
    return await bcrypt.compare(str, hashedStr);
  }
}
