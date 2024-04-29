import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit{
  sort = 'sort';
  itemsShowCount = 12;
  constructor() {

  }

  ngOnInit(): void {

  }

  onSortUpdated(newSort: string): void {
      this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }
}