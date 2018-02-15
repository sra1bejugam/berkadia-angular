import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {GetserService} from './getser.service';
import {MovieService} from './services/movie.service' 
import { AppComponent } from './app.component';
import { NavigateComponent } from './navigate/navigate.component';
import { UpdateComponent } from './update/update.component';
import { MoviesComponent } from './movies/movies.component';
import { AddComponent } from './add/add.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    UpdateComponent,
    MoviesComponent,
    AddComponent,
    MoviedetailsComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,

    RouterModule.forRoot([
      {path:'movies',component:MoviesComponent, pathMatch: 'full'},
      {path:'updatemovie/:id',component:UpdateComponent},
      {path:'moviedetails',component:MoviedetailsComponent},
      {path:'addmovie',component:AddComponent},
      { path: '', redirectTo: 'movies', pathMatch: 'full' },
      {path:'**',redirectTo:'movies',pathMatch:'full'}
    ]),
  ],
  providers: [MovieService,GetserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
