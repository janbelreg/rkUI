import { Component, OnInit } from '@angular/core';
import { MatTableDataSourcePaginator } from '@angular/material/table';
import {DataSource} from 'src/app/pages/home/components/content-table/content-table-datasource'
//import { WeatherForecast } from 'src/models/WeatherForecast';
import { RkServiceService } from 'src/app/services/rk-service.service';
//import { AccountService } from 'src/services/account.service';
//import { User } from 'src/models/user';
import { Zaznam } from 'src/app/models/Zaznam';
import { Reziser } from 'src/app/models/Reziser';
import { ActivatedRoute } from '@angular/router';
import { SpisyZaznamComponent } from 'src/app/pages/Spisy/spisy-zaznam/spisy-zaznam/spisy-zaznam.component';
@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css']
})
export class ContentTableComponent implements OnInit{
 

  dataSource: DataSource[] = [
    { cisloZaznamu: 1, userName: 'John Doe', adresa: '123 Main St', adresat: 'Jane Smith', datumCreate: '2024-02-15', stav: 'Active' },
    { cisloZaznamu: 2, userName: 'Alice Johnson', adresa: '456 Elm St', adresat: 'Bob Brown', datumCreate: '2024-02-16', stav: 'Active' },
    { cisloZaznamu: 3, userName: 'Mary Johnson', adresa: '789 Oak St', adresat: 'David Green', datumCreate: '2024-02-17', stav: 'Active' },
    // Add more data as needed
  ];

  displayedColumns: string[] = ['cisloZaznamu', 'userName', 'adresa', 'adresat', 'datumCreate', 'stav', 'action'];


  constructor() { //, public directorFilmComponent: DirectorFilmComponent
    
  } //, private accountService: AccountService

  /*ngOnInit() : void {
    this.forecast = this.rkServiceService.getWeatherForecast();
    console.log(this.forecast);
  }*/

  ngOnInit(): void {

  }



}
