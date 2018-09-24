import { Recipe } from './recipe.model';

import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modul';
import { ShoppingListService } from '../shopping-list/shopping-list.sevice';

@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

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
			'',
			[
				new Ingredient('Cheese', 1),
				new Ingredient('Meat', 2),
				new Ingredient('Egg', 3),
				new Ingredient('Potato', 12)
			])
	];

	constructor(private slService: ShoppingListService) {}

	getRecipe() {
		return this.recipes.slice();
	}

	addIngredientToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}
}

