import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({
  timestamps: true,
})
export class Movie {
  @Prop()
  title: string;

  @Prop()
  year: number;

  @Prop()
  rated: string;

  @Prop()
  released: string;

}

export const MovieSchema = SchemaFactory.createForClass(Movie);
