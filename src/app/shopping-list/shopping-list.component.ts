import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.modul';
import * as fromShoppingList from './store/shopping-list.reducers';
import * as ShoppingListAction from './store/shopping-list.actions';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
	shoppingListState: Observable<{ingredients: Ingredient[]}>;

	constructor(private store: Store<fromShoppingList.AppState>) { }

	ngOnInit() {
		this.shoppingListState = this.store.select('shoppingList');
	}

	onEditItem(index: number) {
		this.store.dispatch(new ShoppingListAction.StartEdit(index));
	}
}
