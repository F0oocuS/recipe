import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.modul';
import { ShoppingListService } from '../shopping-list/shopping-list.sevice';

@Injectable()
export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();

	private recipes: Recipe[] = [
		new Recipe(
			'A test recipe',
			'This is test',
			'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20),
				new Ingredient('Egg', 3),
				new Ingredient('Bread', 1)
			]),
		new Recipe(
			'One more test',
			'Anouther test',
			'https://wearychef.com/wp-content/uploads/2013/05/buffalo-chicken-wraps-2-2-400x400.jpgs',
			[
				new Ingredient('Cheese', 1),
				new Ingredient('Meat', 2),
				new Ingredient('Egg', 3),
				new Ingredient('Potato', 12)
			])
	];

	constructor(private slService: ShoppingListService) {}

	/*setRecipes(recipes: Recipe[]) {
		this.recipes = recipes;
		this.recipesChanged.next(this.recipes.slice());
	}*/

	getRecipe() {
		return this.recipes.slice();
	}

	getSingleRecipe(index: number) {
		return this.recipes[index];
	}

	addIngredientToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}

	updateRecipe(index: number, newRecipe: Recipe) {
		this.recipes[index] = newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}

	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}
}

