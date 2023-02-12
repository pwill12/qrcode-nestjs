import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovies } from './dto/create-movie.dto';
import { Movie } from './schemas/movie.schema';

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  async getAllMovies(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Post()
  async create(
    @Body()
    movies: CreateMovies,
  ): Promise<Movie> {
    return this.movieService.create(movies);
  }
}
