import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { MoviedataService } from '../services/moviedata.service';


@Component({
  selector: 'app-DisplayMoviesWithPages',
  templateUrl: './DisplayMoviesWithPages.component.html',
  styleUrls: ['./DisplayMoviesWithPages.component.css']
})
export class DisplayMoviesWithPagesComponent implements OnInit {

  constructor(
    private route:Router,
    private activeroute: ActivatedRoute,
    private userMovie:MoviedataService
    ) {}

  movies:any;
  totalresults:any;
  numofpages:any;
  pageArr:any=[];
  pagenum=-1;
  moviename:any;
  pagenumber:any;
  ngOnInit(): void {
    
      this.activeroute.params.subscribe(params => {
      this.moviename=params['searchterm'];
      this.pagenumber=params['pageno'];
      if(!this.pagenumber)
      {
         this.pagenumber=1;
      }
      if(this.moviename )
      {
         this.userMovie.movielist(this.moviename,this.pagenumber).subscribe((data:any)=>{
          console.log("data",data);
          this.movies=data.Search;
          this.totalresults=data.totalResults;
          this.numofpages = Math.ceil(this.totalresults / 10);
          for(let i=0 ;i<this.numofpages;i++)
          {
           this.pageArr[i]=i+1;
          }
        })
      }
     
  });
  }
    

  

  GoForRouting(name:any)
  {
    this.route.navigate(["search/",name,"overview"]);
  }
  sendingmoviename(pagenumber:any){
    const searchterm = this.activeroute.snapshot.paramMap.get('searchterm')
    this.route.navigate(["search/",searchterm,"page",pagenumber]);
  }
    
}
 

// search/movie/overview