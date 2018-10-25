import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.sevice';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
	constructor(private httpClient: HttpClient, private recipeService: RecipeService) {}

	storeRecipes() {
		return this.httpClient.put('https://recipe-book-e14ef.firebaseio.com/recipes.json',	this.recipeService.getRecipe());
	}

	getRecipes() {
		this.httpClient.get<Recipe[]>('https://recipe-book-e14ef.firebaseio.com/recipes.json')
			.map((recipes) => {
				console.log(recipes);
				for (const recipe of recipes) {
					if (!recipe['ingredients']) {
						recipe['ingredients'] = [];
					}
				}

				return recipes;
			})
			.subscribe((recipes: Recipe[]) => {
				console.log(recipes);
				this.recipeService.setRecipes(recipes);
			});
	}
}
