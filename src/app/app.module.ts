import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { TestComponent } from './test/test.component';
import { BoldDirective } from './test/bold.directive';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.sevice';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

import { shoppingListReducer } from './shopping-list/store/shopping-list.reducers';

import { RecipesModule } from './recipes/recipes.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		DropdownDirective,
		TestComponent,
		BoldDirective
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule,
		RecipesModule,
		AuthModule,
		ShoppingListModule,
		StoreModule.forRoot({shoppingList: shoppingListReducer})
	],
	providers: [RecipeService, DataStorageService, AuthService, AuthGuardService],
	bootstrap: [AppComponent]
})
export class AppModule { }
