import { PizzasEffects } from './pizzas.effect';
<<<<<<< HEAD

export const effects: any[] = [PizzasEffects];

export * from './pizzas.effect';
=======
import { ToppingsEffects } from './toppings.effect';

export const effects: any[] = [PizzasEffects, ToppingsEffects];

export * from './pizzas.effect';
export * from './toppings.effect';
>>>>>>> origin/14-visualise-dispatch
