import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import {TodoItemData} from './dataTypes/TodoItemData';


@Injectable()
export class LocalisationService {

	current_item: string;
	current_longitude: number;
	current_latitude: number;
	
	items: TodoItemData[];
	//coordonnees: array[][];
	//coordonnees: { [label: string]: number[]; } = { };
	
  constructor() { }

  setItems(items: TodoItemData[]): void {
	  //console.log(items);
	  this.items = items;
  }
  
  getItems(): TodoItemData[] {
	  return this.items;
  }
  
  setCurrentItem(label: string): void {  
	this.current_item = label;
  }
  
  
  getCurrentItem(): string{
	  return this.current_item;
  }
  
  setLongitude(longitude: number): void {
	  this.current_longitude = longitude;
  }
  
  getLongitude(): number {
	  return this.current_longitude;
  }
  
  setLatitude(latitude: number): void {
	  this.current_latitude = latitude;
  }
  
  getLatitude(): number {
	  return this.current_latitude;
  }
  
  setCurrentCoordonnee(event): void{
	  this.current_latitude = event.coords.lat;
	  this.current_longitude = event.coords.lng;
	  //this.coordonnees['current'] = new Array( event.coords.lat, event.coords.lng);
	  //console.log(this.coordonnees);
  }
  
}
