import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { PolylinesController } from './controllers/polylines.controller';
import { PolylinesService } from './services/polylines.service';
import { Polyline, PolylineSchema } from "@polylines/models/schemas/polyline.schema";

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
