import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.sevice';

@Injectable()
export class DataStorageService {
	constructor(private http: HttpClient, private recipeService: RecipeService) {}

	storeRecipes() {
		return this.http.put(
			'https://recipe-book-e14ef.firebaseio.com/recipes.json',
			this.recipeService.getRecipe()
		);
	}

	/*getRecipes() {
		this.http.get('https://recipe-book-e14ef.firebaseio.com/recipes.json')
			.subscribe(
				(response: Response) => {
					const recipes: Recipe[] = response.json();
				});
	}*/
}
