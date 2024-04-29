import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit{
categories = ['otvorený', 'vybavený', 'uzavretý'];

constructor() {

}

ngOnInit(): void {

}

}
