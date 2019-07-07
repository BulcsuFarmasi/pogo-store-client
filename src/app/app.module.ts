import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { AddPokedexComponent } from './components/add-pokedex/add-pokedex.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonComponent,
    PokedexComponent,
    AddPokedexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
