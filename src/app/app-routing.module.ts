import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const AppRoute: Routes = [
	{
		path: '',
		redirectTo: '/recipes',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(AppRoute) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}
