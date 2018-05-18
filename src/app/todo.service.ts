import {Injectable, ɵEMPTY_ARRAY} from '@angular/core';
import {TodoListData} from './dataTypes/TodoListData';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TodoItemData} from './dataTypes/TodoItemData';

@Injectable()
export class TodoService {

  private todoListSubject = new BehaviorSubject<TodoListData>( {label: 'TodoList', items: []} );
  constructor() { }

  getTodoListDataObserver(): Observable<TodoListData> {
    return this.todoListSubject.asObservable();
  }

  setItemsLabel(label: string, data: TodoItemData, latitude: number, longitude: number ) {
    const tdl = this.todoListSubject.getValue();
	console.log(label);
	//console.log(tdl.items.map( I => items.indexOf(I) === -1 ? I : ({label, isDone: I.isDone, latitude, longitude}) ));
    this.todoListSubject.next( {
      label: tdl.label,
      items: tdl.items.map( I => data.label !== I.label ? I : ({label, isDone: I.isDone, latitude, longitude}) )
    });
	console.log(this.todoListSubject.getValue());
  }


  setItemsDone(isDone: boolean, ...items: TodoItemData[] ) {
    const tdl = this.todoListSubject.getValue();
    this.todoListSubject.next( {
      label: tdl.label,
      items: tdl.items.map( I => items.indexOf(I) === -1 ? I : ({label: I.label, isDone, latitude: I.latitude, longitude: I.longitude}) )
    });
  }

  appendItems( ...items: TodoItemData[] ) {
    const tdl = this.todoListSubject.getValue();
    this.todoListSubject.next( {
      ...tdl,
      items: [...tdl.items, ...items]
    });
  }

  removeItems( ...items: TodoItemData[] ) {
    const tdl = this.todoListSubject.getValue();
    this.todoListSubject.next( {
      ...tdl,
      items: tdl.items.filter( I => items.indexOf(I) === -1 )
    });
  }


}
