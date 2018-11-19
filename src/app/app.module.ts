import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { TestComponent } from './test/test.component';
import { BoldDirective } from './test/bold.directive';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.sevice';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

import { shoppingListReducer } from './shopping-list/store/shopping-list.reducers';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		RecipesComponent,
		RecipeDetailComponent,
		RecipeListComponent,
		RecipeItemComponent,
		RecipeStartComponent,
		RecipeEditComponent,
		ShoppingListComponent,
		ShoppingEditComponent,
		DropdownDirective,
		TestComponent,
		BoldDirective,
		SignupComponent,
		SigninComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule,
		ReactiveFormsModule,
		StoreModule.forRoot({shoppingList: shoppingListReducer})
	],
	providers: [RecipeService, DataStorageService, AuthService, AuthGuardService],
	bootstrap: [AppComponent]
})
export class AppModule { }
