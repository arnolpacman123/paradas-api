import { Module } from '@nestjs/common';
import { LinesController } from '@lines/controllers/lines.controller';
import { LinesService } from '@lines/services/lines.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Line, LineSchema } from '@lines/models/schemas/line.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Line.name, schema: LineSchema },
    ])
  ],
  controllers: [LinesController],
  providers: [LinesService]
})
export class LinesModule {}
