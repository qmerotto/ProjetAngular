import {ChangeDetectionStrategy, Component, ViewChild, ElementRef, Input, OnInit} from '@angular/core';
import {TodoItemData} from '../dataTypes/TodoItemData';
import {TodoService} from '../todo.service';
import {latLng} from 'leaflet';
import {LocalisationService} from '../localisation.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoItemComponent implements OnInit {
  @Input() private data: TodoItemData;
  @ViewChild('newTextInput')
  newTextInput: ElementRef;
  _isEditing = false;
	
	
  constructor(private todoService: TodoService, public localisationService: LocalisationService) {
  }

  ngOnInit() {
  }
	setCurrentItem() {
		this.localisationService.setCurrentItem(this.getLabel());
	}
  
  getLabel(): string {
	this.goTo();
    return this.data.label;
  }

  setLabel(label: string) {
	let latitude = this.data.latitude === this.localisationService.getLatitude() ? this.data.latitude : this.localisationService.getLatitude();
	let longitude = this.data.longitude === this.localisationService.getLongitude() ? this.data.longitude : this.localisationService.getLongitude();
	let datas: TodoItemData[] = [];
	
	datas.push(this.data);
    console.log(datas);

    this.todoService.setItemsLabel(label, this.data, latitude, longitude);
  }

  getLongitude(): number {
	  return this.data.longitude;
  }
  
  getLatitude(): number {
	  return this.data.latitude;
  }
  
  getIsDone(): boolean {
    return this.data.isDone;
  }

  setDone(isDone: boolean) {
    this.todoService.setItemsDone(isDone, this.data);
  }

  remove() {
    this.todoService.removeItems(this.data);
  }
  
  goTo(): void {
	  this.localisationService.setLatitude(this.data.latitude);
	  this.localisationService.setLongitude(this.data.longitude);
  }

  get isEditing(): boolean {
    return this._isEditing;
  }

  set isEditing(value: boolean) {
    this._isEditing = value;
    if (value) {
      requestAnimationFrame(
        () => this.newTextInput.nativeElement.focus()
      );
    }
  }
}

