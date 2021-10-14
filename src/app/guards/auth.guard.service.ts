import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(
    private router: Router
  ) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) : Observable<boolean> | boolean {

    // nesse espaõ podemos colocar qualquer condição
    // usaremos futuramente para confirmar login 

    // true se puder usar a rota
    // false se não puder usar a rota
    return true;
  }
}

