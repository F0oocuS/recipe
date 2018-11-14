import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.modul';
import { ShoppingListService } from './shopping-list.sevice';
import * as fromShoppingList from './store/shopping-list.reducers';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
	shoppingListState: Observable<{ingredients: Ingredient[]}>;
	private subscription: Subscription;

	constructor(private slService: ShoppingListService, private store: Store<fromShoppingList.AppState>) { }

	ngOnInit() {
		this.shoppingListState = this.store.select('shoppingList');
		// this.subscription = this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
		// 	this.ingredients = ingredients;
		// });
	}

	onEditItem(index: number) {
		this.slService.startedEditing.next(index);
	}
}
