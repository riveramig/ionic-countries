import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {

  country:any;

  constructor(private route: ActivatedRoute) {
      this.route.queryParams.subscribe(data=>{
        this.country=JSON.parse(data.country)
        console.log(this.country)
      });
  }

  ngOnInit() {
    
  }

}
