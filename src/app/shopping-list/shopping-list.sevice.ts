import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.modul';

export class ShoppingListService {
	ingredientsChanged = new Subject<Ingredient[]>();

	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 7),
		new Ingredient('Tomatos', 10)
	];

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredient(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	addIngredients(ingredients: Ingredient[]) {
		/*for (const ingredient of ingredients) {
			this.addIngredient(ingredient);
		}*/
		this.ingredients.push(...ingredients);
		this.ingredientsChanged.next(this.ingredients.slice());
	}
}
