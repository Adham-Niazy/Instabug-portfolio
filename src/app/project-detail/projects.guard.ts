import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsGuard implements CanActivate {

  constructor( private route: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    const id = +next.url[1].path;
    if ( isNaN(id) || ( id  < 1 || id > 3 ) ) {
      alert('Invalid product Url');
      this.route.navigate(['/Home']);
      return false;
    }
    return true;
  }

}
