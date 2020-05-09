import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private firebaseAuth:AngularFireAuth) { }
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return new Promise<boolean>((resolve,reject)=>{
      this.firebaseAuth.authState.pipe(take(1)).subscribe(user=>{
        if(user){
          resolve(true)
        }else{
          reject(false);
        }
      })
    })
  }
}
