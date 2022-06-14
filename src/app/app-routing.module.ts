import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { DisplayMoviesWithPagesComponent } from './DisplayMoviesWithPages/DisplayMoviesWithPages.component';
import {OverviewPageComponent} from './overview-page/overview-page.component';
const routes: Routes = [ 
  
  { path: 'search/:searchterm', component: DisplayMoviesWithPagesComponent },
  
  { path: 'search/:movie/overview', component: OverviewPageComponent },

  { path: 'search/:searchterm/page/:pageno', component: DisplayMoviesWithPagesComponent }
  
  ]; 
@NgModule({ 
   imports: [RouterModule.forRoot(routes)], 
   exports: [RouterModule] }) 
export class AppRoutingModule { }


// searchterm/overview