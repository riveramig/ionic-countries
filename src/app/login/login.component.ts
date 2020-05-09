import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private firebaseAuth:AngularFireAuth, private toast:ToastController, private router:Router) { }

  private email;
  private password;

  ngOnInit() {}

  public doLogin(){
    this.firebaseAuth.signInWithEmailAndPassword(this.email,this.password)
    .then(async value=>{
      this.router.navigate([('home/tabs/tab1')]);
    })  
    .catch(async e=>{
      const toast = await this.toast.create({
        message:e.message,
        duration:4000
      });
      toast.present();
    })
  }

}
