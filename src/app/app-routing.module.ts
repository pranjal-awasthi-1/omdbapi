import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { DisplayMoviesWithPagesComponent } from './DisplayMoviesWithPages/DisplayMoviesWithPages.component';

const routes: Routes = [ 
  
  { path: 'search/:searchterm', component: DisplayMoviesWithPagesComponent },
  
  { path: 'search/:searchterm/page/:pageno', component: DisplayMoviesWithPagesComponent }
  
  ]; 
@NgModule({ 
   imports: [RouterModule.forRoot(routes)], 
   exports: [RouterModule] }) 
export class AppRoutingModule { }