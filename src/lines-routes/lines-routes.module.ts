import { Module } from '@nestjs/common';
import { LinesRoutesController } from './controllers/lines-routes.controller';
import { LinesRoutesService } from './services/lines-routes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LineRoutes, LineRoutesSchema } from '@lines-routes/models/schemas/line-routes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LineRoutes.name, schema: LineRoutesSchema }
    ])
  ],
  controllers: [LinesRoutesController],
  providers: [LinesRoutesService]
})
export class LinesRoutesModule {}
