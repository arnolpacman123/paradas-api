import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type LineDocument = Line & Document;

@Schema({
  versionKey: false,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
    },
  },
})
export class Line {
  @Prop({
    type: String,
  })
  name: string;
}

export const LineSchema = SchemaFactory.createForClass(Line);
