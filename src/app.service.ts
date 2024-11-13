import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
// import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheMng: Cache) {}

  getHello(): string {
    return 'Hello Worlds!';
  }

  async getCache(): Promise<string> {
    const valCache = await this.cacheMng.get(`test`);

    if (valCache) {
      return String(valCache);
    }

    if (!valCache) {
      const datetime = new Date();
      const isoString = datetime.toISOString();
      await this.cacheMng.set(`test`, isoString, 1 * 60 * 1000);
      return isoString;
    }
  }
}
