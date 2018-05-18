import { Component, OnInit } from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import { NgModule } from '@angular/core';
import {LocalisationService } from '../localisation.service';
import {TodoItemData} from '../dataTypes/TodoItemData';


@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css']
})


export class LocalisationComponent implements OnInit {
	
// Latitude et longitude initiale (Grenoble)
  latitude = 45.188529;
  longitude = 5.724524;
  items: TodoItemData[];
  
  constructor(public localisationService: LocalisationService) { }

  ngOnInit() {
	  this.localisationService.setLongitude(this.longitude);
	  this.localisationService.setLatitude(this.latitude);
  }
	
	setCurrentCoordonnee(event): void {
		
		this.localisationService.setCurrentCoordonnee(event);		
	}
}
