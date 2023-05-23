import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PolylinesController } from '@polylines/controllers/polylines.controller';
import { PolylinesService } from '@polylines/services/polylines.service';
import {
  Polyline,
  PolylineSchema,
} from '@polylines/models/schemas/polyline.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Polyline.name,
        schema: PolylineSchema,
      },
    ]),
  ],
  controllers: [PolylinesController],
  providers: [PolylinesService],
})
export class PolylinesModule {}
