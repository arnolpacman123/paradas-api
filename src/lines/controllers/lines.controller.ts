import { LinesService } from '@lines/services/lines.service';
import { Controller, Get } from '@nestjs/common';

@Controller('lines')
export class LinesController {
  constructor(private readonly linesService: LinesService) {}

  @Get()
  async findAll() {
    return await this.linesService.findAll();
  }

  @Get('seed')
  async seed() {
    return await this.linesService.seed();
  }
  
}
