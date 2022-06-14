import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { MoviedataService } from '../services/moviedata.service';
@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {

  constructor(
    private route:Router,
    private activeroute: ActivatedRoute,
    private userMovie:MoviedataService,
  ) { }
  movie:any;
  searchterm:any;
  ngOnInit(): void {
  
    this.searchterm = this.activeroute.snapshot.paramMap.get('movie')
    this.userMovie.gettingmovie(this.searchterm).subscribe((data:any)=>{
    console.log("data",data);
    this.movie=data;
    })
  }

}
