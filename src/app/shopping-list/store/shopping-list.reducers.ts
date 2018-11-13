import * as ShoppingListActions from './shopping-list.actions';

import { Ingredient } from '../../shared/ingredient.modul';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

const initialState = {
	ingredients: [
		new Ingredient('Apples', 7),
		new Ingredient('Tomatos', 10)
	]
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
		default:
			return state;
	}
}
