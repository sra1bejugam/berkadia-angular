import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Movie } from '../app/schema/movie';
import { MovieService } from './services/movie.service';

@Injectable()
export class GetserService implements Resolve<any>{
  movies:Movie[];
  resolve(){
    this.movieservice.getMovies().subscribe((movies:Movie[])=>{
      this.movies=movies;
    })
  }

  constructor(private movieservice:MovieService) { }

}
