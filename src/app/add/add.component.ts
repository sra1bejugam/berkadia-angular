import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  save:boolean=true;

  addMovie(movie:NgForm){
    this.movieservice.addMovie(movie).subscribe(()=>{
      console.log("Added movie"+movie);
    })
    this.save=false;
    this.router.navigate(['/movies']);
  }

  cancel(){
    this.save=true;
    this.router.navigate(['/movies']);
  }

  constructor(private movieservice:MovieService,private router:Router) { }

  ngOnInit() {
  }

}
