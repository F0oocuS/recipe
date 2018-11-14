import * as ShoppingListActions from './shopping-list.actions';

import { Ingredient } from '../../shared/ingredient.modul';

export interface AppState {
	shoppingList: State;
}

export interface State {
	ingredient: Ingredient[];
	editedIngredient: Ingredient;
	editedIngredientIndex: number;
}

const initialState = {
	ingredients: [
		new Ingredient('Apples', 7),
		new Ingredient('Tomatos', 10)
	],
	editedIngredient: null,
	editedIngredientIndex: -1
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
	switch (action.type) {
		case ShoppingListActions.ADD_INGREDIENT:
			return {
				...state,
				ingredients: [...state.ingredients, action.payload]
			};
		case ShoppingListActions.ADD_INGREDIENTS:
			return {
				...state,
				ingredients: [...state.ingredients, ...action.payload]
			};
		case ShoppingListActions.UPDATE_INGREDIENT:
			const ingredient = state.ingredients[action.payload.index];
			const updatedIngredient = {
				...ingredient,
				...action.payload.ingredient
			};
			const ingredients = [...state.ingredients];
			ingredients[action.payload.index] = updatedIngredient;

			return {
				...state,
				ingredients: ingredients
			};
		case ShoppingListActions.DELETE_INGREDIENT:
			const oldIngredients = [...state.ingredients];
			oldIngredients.splice(action.payload, 1);
			return {
				...state,
				ingredients: oldIngredients
			};
		default:
			return state;
	}
}
