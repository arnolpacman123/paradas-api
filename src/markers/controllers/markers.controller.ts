import { Controller, Get } from "@nestjs/common";
import { MarkersService } from "@markers/services/markers.service";

@Controller('markers')
export class MarkersController {

  constructor(
    private readonly markersService: MarkersService,
  ) {
  }

  @Get()
  async findAll() {
    return await this.markersService.findAll();
  }

  @Get('seed')
  async seed() {
    return await this.markersService.seed();
  }

}
