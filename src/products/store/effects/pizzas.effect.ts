import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as pissaActions from '../actions/pizzas.action';
import * as fromService from '../../services';

@Injectable()
export class PizzasEffects {
  constructor(private actions$: Actions, private pizzaService: fromService.PizzasService) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(pissaActions.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzaService
        .getPizzas()
        .pipe(
          map(pizzas => new pissaActions.LoadPizzasSuccess(pizzas)),
          catchError(error => of(new pissaActions.LoadPizzasFail(error)))
        );
    })
  );
}
