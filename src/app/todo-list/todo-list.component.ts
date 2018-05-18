import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {TodoListData} from '../dataTypes/TodoListData';
import {TodoItemData} from '../dataTypes/TodoItemData';
import {TodoService} from '../todo.service';
import {isBoolean} from 'util';
import {forEach} from '@angular/router/src/utils/collection';
import {equal} from 'assert';
import {LocalisationService } from '../localisation.service';
type FCT_FILTER_ITEMS = (item: TodoItemData ) => boolean ;

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  @Input() private data: TodoListData;
  titre = 'Bienvenue';

  locationChose = false ;
  currentFilter: FCT_FILTER_ITEMS;
  filterAll: FCT_FILTER_ITEMS = () => true;
  filterDone: FCT_FILTER_ITEMS = item => item.isDone;
  filterUnDone: FCT_FILTER_ITEMS = item => !item.isDone;
  
   constructor(private todoService: TodoService, private localisationService: LocalisationService) {
     this.currentFilter = this.filterAll;
  }

  ngOnInit() {
  }

  getLabel(): string {
    return this.data ? this.data.label : '';
  }

  getItems(): TodoItemData[] {
    return this.data ? this.data.items : [];
  }


  appendItem(itemLabel: string) {
    this.todoService.appendItems({
      label: itemLabel,
      isDone: false,
	  latitude: this.localisationService.getLatitude(),
	  longitude: this.localisationService.getLongitude()
    });
  }

   removeItem(item: TodoItemData) {
    this.todoService.removeItems(item);
  }

  removeItems() {

    this.todoService.removeItems(...this.getItems().filter(this.filterDone));
  }

  setItemDone(item: TodoItemData, isDone: boolean) {
    this.todoService.setItemsDone (isDone, item);
  }
  
  NbitemsUnchecked(): number {
     return this.data.items.reduce(
       (acc, item) => acc + (item.isDone ? 0 : 1)
     , 0);
   }
   
   getFiltereditems(): TodoItemData[] {
	   //On met à jour l'array dans le service localisation à chaque changement de filtre
	 this.localisationService.setItems(this.getItems().filter(this.currentFilter));
     return this.getItems().filter(this.currentFilter);
   }
   
   isAllDone(): boolean {
     return this.getItems().reduce(
       (acc, item) => acc && item.isDone
       , true);
   }
   toggleAllDone() {
     const done = !this.isAllDone();
     this.todoService.setItemsDone(done, ...this.getItems());
   }


}
