import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { PolylineOptions } from "@polylines/models/interfaces";
import { Marker } from "@markers/models/schemas/marker.schema";

export type PolylineDocument = Polyline & Document;

@Schema({
  versionKey: false,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
    }
  }
})
export class Polyline {
  @Prop({
    type: Object
  })
  options: PolylineOptions;

  @Prop({
    type: Object
  })
  stands?: Marker[];

  @Prop({
    type: String,
  })
  busLine?: string;
}

export const PolylineSchema = SchemaFactory.createForClass(Polyline);