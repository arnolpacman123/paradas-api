import {
  LineRoutesDocument,
  LineRoutes,
} from '@lines-routes/models/schemas/line-routes.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LinesRoutesService {

  constructor(
    @InjectModel(LineRoutes.name)
    private readonly lineRoutesModel: Model<LineRoutesDocument>,
  ) { }


  async findAll(): Promise<LineRoutes[]> {
    return this.lineRoutesModel
      .find()
      .sort({
        _id: 1,
      })
      .exec();
  }

  async findOneByLine(line: string): Promise<LineRoutes> {
    return this.lineRoutesModel.findOne({
      name: line,
    }).exec();
  }

  async changeStrokeColorForAllDirectionsIDA() {
    return this.lineRoutesModel.updateMany(
      {
        "lineRoutesOptions.direction": "IDA"
      },
      {
        $set: {
          "lineRoutesOptions.$.options.strokeColor": "#FF5252"
        }
      },
    );
  }

}
