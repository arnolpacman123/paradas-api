import { LinesRoutesService } from '@lines-routes/services/lines-routes.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('lines-routes')
export class LinesRoutesController {

  constructor(
    private readonly linesRoutesService: LinesRoutesService
  ) {
  }

  @Get()
  async findAll() {
    return await this.linesRoutesService.findAll();
  }

  @Get(':line')
  async findOneByLine(
    @Param('line') line: string
  ) {
    return await this.linesRoutesService.findOneByLine(line);
  }

}
