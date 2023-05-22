import { Module } from "@nestjs/common";
import { MarkersController } from "./controllers/markers.controller";
import { MarkersService } from "./services/markers.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Marker, MarkerSchema } from "@markers/models/schemas/marker.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Marker.name,
        schema: MarkerSchema
      }
    ])
  ],
  controllers: [ MarkersController ],
  providers: [ MarkersService ],
})
export class MarkersModule {
}
