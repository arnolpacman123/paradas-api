import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Position } from "@markers/models/interfaces";

export type MarkerDocument = Marker & Document;

@Schema({
  versionKey: false,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
    }
  },
})
export class Marker {
  @Prop({
    type: Object
  })
  position: Position;
}

export const MarkerSchema = SchemaFactory.createForClass(Marker);