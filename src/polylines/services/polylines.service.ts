import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Polyline,
  PolylineDocument,
} from '@polylines/models/schemas/polyline.schema';
import { Model } from 'mongoose';
import { FindPolylineByStandDto } from '@polylines/models/dto/find-polyline-by-stand.dto';

@Injectable()
export class PolylinesService {
  constructor(
    @InjectModel(Polyline.name)
    private readonly polylineModel: Model<PolylineDocument>,
  ) {}

  async findAllLinesRoutes(): Promise<Polyline[]> {
    return this.polylineModel
      .find({
        busLine: {
          $exists: true,
        },
      })
      .exec();
  }

  async findAllChannels(): Promise<Polyline[]> {
    return this.polylineModel
      .find({
        busLine: {
          $exists: false,
        },
      })
      .exec();
  }

  async findOneByStand(standDto: FindPolylineByStandDto): Promise<Polyline> {
    return await this.polylineModel
      .findOne({
        stands: {
          $elemMatch: {
            position: {
              lat: standDto.lat,
              lng: standDto.lng,
            },
          },
        },
      })
      .exec();
  }

  findOneByLine(line: string): Promise<Polyline[]> {
    return this.polylineModel
      .find({
        busLine: line,
      })
      .exec();
  }
}
