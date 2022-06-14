import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoviedataService {

  constructor(private http:HttpClient) { }
  url="https://www.omdbapi.com/";
  
  movielist(movieName:any,pagenumber:any){
      return this.http.get(this.url+"?s="+movieName+"&apikey=3e2e0d38"+"&page="+pagenumber);
  }
  gettingmovie(movieName:any)
  {
    return this.http.get(this.url+"?i="+movieName+"&apikey=3e2e0d38");
  }
}
