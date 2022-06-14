
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { DisplayMoviesWithPagesComponent } from './DisplayMoviesWithPages/DisplayMoviesWithPages.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchresultComponent,
    DisplayMoviesWithPagesComponent,
    OverviewPageComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule, AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
