import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<{curr: string, cache: string}> {
    return {
      curr: (new Date()).toISOString(), 
      cache: await this.appService.getCache()
    };
  }
}
