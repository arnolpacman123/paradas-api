import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { MarkersModule } from "@markers/markers.module";
import { PolylinesModule } from '@polylines/polylines.module';
import { LinesModule } from './lines/lines.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://arnolguevara:aspirine@cluster0.vlohb.mongodb.net/paradas_db?retryWrites=true&w=majority"),
    MarkersModule,
    PolylinesModule,
    LinesModule,
  ],
  controllers: [ AppController ],
  providers: [ AppService ]
})
export class AppModule {
}
