import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public countries:Array<any>=[];
  public countriesOriginal:Array<any>=[];

  constructor(private route: ActivatedRoute,private http:HttpClient, private loadingController:LoadingController, private router:Router) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  async loadCountries(){
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    loading.present();
    this.http.get('https://restcountries.eu/rest/v2/all').pipe(take(1)).subscribe((data:any)=>{
      this.countries=data;
      this.countriesOriginal=data;
      loading.onDidDismiss();
    })
  }

  change(e){
    const value=e.detail.value;
    this.countries=this.countriesOriginal.filter(x=>x.name.toLowerCase().includes(value))
  }

  cancel(e){
    this.countries=this.countriesOriginal;
  }

  loadCountryInfo(country){
    this.router.navigate(['../country'],{relativeTo:this.route,queryParams:{"country":JSON.stringify(country)}})
  }
}
