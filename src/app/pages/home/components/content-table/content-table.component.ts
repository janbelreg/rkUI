import { Component, OnInit } from '@angular/core';
import { MatTableDataSourcePaginator } from '@angular/material/table';
import {DataSource} from 'src/app/pages/home/components/content-table/content-table-datasource'
import { RkServiceService } from 'src/app/services/rk-service.service';

import { Zaznam } from 'src/app/models/Zaznam';
import { ActivatedRoute } from '@angular/router';
import { SpisyZaznamComponent } from 'src/app/pages/Spisy/spisy-zaznam/spisy-zaznam/spisy-zaznam.component';
@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css']
})
export class ContentTableComponent implements OnInit{
 



  displayedColumns: string[] = ['cisloZaznamu', 'userName', 'adresa', 'adresat', 'datumCreate', 'stav', 'action'];


  constructor() { 
    
  } 

  ngOnInit(): void {

  }



}
