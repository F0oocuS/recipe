import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.sevice';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
	constructor(private httpClient: HttpClient, private recipeService: RecipeService) {}

	storeRecipes() {
		return this.httpClient.put('https://recipe-book-e14ef.firebaseio.com/recipes.json',	this.recipeService.getRecipe());
	}

	getRecipes() {
		this.httpClient.get<Recipe[]>('https://recipe-book-e14ef.firebaseio.com/recipes.json').subscribe(data => {
			console.log(data);
			this.recipeService.setRecipes(data);
			console.log('data is works');
		});
	}
}
