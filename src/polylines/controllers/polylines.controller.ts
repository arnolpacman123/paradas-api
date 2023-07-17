import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PolylinesService } from "@polylines/services/polylines.service";
import { FindPolylineByStandDto } from "@polylines/models/dto/find-polyline-by-stand.dto";

@Controller("polylines")
export class PolylinesController {

  constructor(
    private readonly polylinesService: PolylinesService
  ) {
  }

  @Get('lines-routes')
  async findAllLinesRoutes() {
    return await this.polylinesService.findAllLinesRoutes();
  }

  @Get('channels')
  async findAllChannels() {
    return await this.polylinesService.findAllChannels();
  }

  @Get("find-one-by-line/:line")
  async findOneByLine(
    @Param("line") line: string
  ) {
    return await this.polylinesService.findOneByLine(line);
  }

  @Post("find-one-by-stand")
  async findOneByStand(
    @Body() standDto: FindPolylineByStandDto
  ) {
    return await this.polylinesService.findOneByStand(standDto);
  }
}
