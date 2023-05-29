import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { LineRoutesOptions } from "@lines-routes/models/interfaces";

export type LineRoutesDocument = LineRoutes & Document;

@Schema({
  collection: 'lines_routes',
  versionKey: false,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
    }
  }
})
export class LineRoutes {
  @Prop({
    type: String,
  })
  name: string;
  
  @Prop({
    type: Object,
  })
  lineRoutesOptions: [LineRoutesOptions, LineRoutesOptions];
}

export const LineRoutesSchema = SchemaFactory.createForClass(LineRoutes);