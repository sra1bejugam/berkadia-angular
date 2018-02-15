import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Movie } from '../schema/movie';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  movie:Movie;

  updateMovie(updatemovie:NgForm){
    this.movieservice.updateMovie(this.movie.name ,updatemovie).subscribe(()=>{
      console.log("Updated "+this.movie.name+" movie to "+updatemovie.name);
    })
    this.router.navigate(['/movies']);
  }

  cancel(){
    this.router.navigate(['/movies']);
  }

  constructor(private movieservice:MovieService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.movieservice.getMovie(this.route.snapshot.params['name']).subscribe((movie)=>{
      this.movie=movie;
    });
  }

}
