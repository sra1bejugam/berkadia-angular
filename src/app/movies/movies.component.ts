import { Component, OnInit } from '@angular/core';
import { Movie } from '../schema/movie';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:Movie[];

  constructor(private moviesService:MovieService,private router:Router) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(res=>{
      this.movies=res;
      console.log(res);
    })
  }

}
