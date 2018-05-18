import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import {TodoService} from './todo.service';
import {FormsModule} from '@angular/forms';
import { LocalisationService } from './localisation.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import {AgmCoreModule} from '@agm/core';
//import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { LocalisationComponent } from './localisation/localisation.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    LocalisationComponent
  ],
  imports: [
    BrowserModule, FormsModule, 
	AgmCoreModule.forRoot({
      // Clé pour Google Maps https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
    apiKey : 'AIzaSyDkb_JXS8-SZWiKJjXVjfUbhGq8LouHADQ' }),
	environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [TodoService, LocalisationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
