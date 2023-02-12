import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Movie } from './schemas/movie.schema';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name)
    private movieModel: mongoose.Model<Movie>,
  ) {}

  async findAll(): Promise<Movie[]> {
    const movies = await this.movieModel.find();
    return movies;
  }

  async create(movie: Movie): Promise<Movie> {
    const res = await this.movieModel.create(movie);
    return res;
  }
}
