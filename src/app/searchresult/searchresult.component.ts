import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';


@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  constructor(
    private route:Router
  ) 
  { }
  moviename:any;

  ngOnInit(): void {
  }
   
  gotoroute(){
  this.route.navigate(["search/",this.moviename]);
  }

}
