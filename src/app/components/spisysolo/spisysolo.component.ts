import {ChangeDetectorRef, Component, OnInit } from '@angular/core';
//import { WeatherForecast } from 'src/models/WeatherForecast';
import { RkServiceService } from 'src/app/services/rk-service.service';
//import { AccountService } from 'src/services/account.service';
//import { User } from 'src/models/user';
import { Zaznam } from 'src/app/models/Zaznam';
import { Spis } from 'src/app/models/Spis';
import { Reziser } from 'src/app/models/Reziser';
import { Film } from 'src/app/models/Film';
import { ActivatedRoute } from '@angular/router';
import { SpisyZaznamComponent } from 'src/app/pages/Spisy/spisy-zaznam/spisy-zaznam/spisy-zaznam.component';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator , MatPaginatorModule} from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-spisysolo',
  templateUrl: './spisysolo.component.html',
  styleUrls: ['./spisysolo.component.css']
})
export class SpisysoloComponent implements AfterViewInit{
  title = 'store';
  users: any;
  spisy: Spis[] = [];
  spisToEdit?: Spis;
  zazToEdit?: Zaznam;
  rezID = this.zazToEdit?.spisId;
  print: any;
  premenna: string = "";
  public rkServiceService2?: RkServiceService;
  abc: string ="";
  currentPage = 0;
  startIndex = 0;
  endIndex = 10;
  sortA: string = "";
  dataSource = new MatTableDataSource<Spis>([]);
 
  
  displayedColumns: string[] = ['id', 'nazovSpisu', 'datumVytvorenia', 'miestoNarodenia', 'username', 'actions'];

  constructor(public rkServiceService: RkServiceService, private cdr: ChangeDetectorRef ) { 
  } 



  ngOnInit(): void {
   
    this.rkServiceService
    .getSpis()
    .subscribe((result: Spis[]) => (this.spisy = result));
  }

  ngAfterViewInit(): void {
    
  }

  getUpdated(): void {
    this.rkServiceService
    .getSpis()
    .subscribe((result: Spis[]) => 
      {
        this.cdr.detectChanges();
        this.spisy = result.slice(this.startIndex,this.endIndex);
        this.dataSource.data = this.spisy;
        this.dataSource = new MatTableDataSource(result);
        console.log("Data fetched successfully:", this.dataSource);
        this.cdr.detectChanges();
      }, error => {
        console.error("Error fetching data:", error);
      });
  }

  pageNup(rise: number) {
    this.startIndex = this.startIndex + rise;
    this.endIndex = this.endIndex + rise;
    this.getUpdated();
  }

  pageNdown(down: number) {
    this.startIndex = this.startIndex - down;
    this.endIndex = this.endIndex - down;
    this.getUpdated();
  }

  pageStart(start: number) {
    this.startIndex = 0;
    this.endIndex = start;
    this.getUpdated();
  }

  sortUp() {
    this.rkServiceService
    .getSpis()
    .subscribe((result: Spis[]) => 
      {
        this.cdr.detectChanges();
        this.sortA = "vzostupne";
        this.spisy = result.sort();
        this.dataSource.data = this.spisy;
        this.dataSource = new MatTableDataSource(result);
        console.log("Data fetched successfully:", this.dataSource);
        this.cdr.detectChanges();
      }, error => {
        console.error("Error fetching data:", error);
      });
  }

  sortDown() {
    this.rkServiceService
    .getSpis()
    .subscribe((result: Spis[]) => 
      {
        this.cdr.detectChanges();
        this.sortA = "zostupne";
        this.spisy = result.sort((a,b) => this.spisy.length );
        this.dataSource.data = this.spisy;
        this.dataSource = new MatTableDataSource(result);
        console.log("Data fetched successfully:", this.dataSource);
        this.cdr.detectChanges();
      }, error => {
        console.error("Error fetching data:", error);
      });
  }

  updateSpisList(spis: Spis[]) {
    this.spisy = spis;
  }


  initNewSpis() {
    this.spisToEdit = new Spis();
  }

  editSpis(spis: Spis) {
    this.spisToEdit = spis;
  }
}
