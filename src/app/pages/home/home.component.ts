import { Component , OnInit } from '@angular/core';
import { RkServiceService } from 'src/app/services/rk-service.service';
import { Zaznam } from 'src/app/models/Zaznam';
import { Spis } from 'src/app/models/Spis';
import { ActivatedRoute } from '@angular/router';
import { SpisyZaznamComponent } from 'src/app/pages/Spisy/spisy-zaznam/spisy-zaznam/spisy-zaznam.component';
import { ContentHeaderComponent } from 'src/app/pages/home/components/content-header/content-header.component';
import { ContentTableComponent } from 'src/app/pages/home/components/content-table/content-table.component';
import { FiltersComponent } from 'src/app/pages/home/components/filters/filters.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'store';
  users: any;
  spisy: Spis[] = [];
  spisToEdit?: Spis;
  zazToEdit?: Zaznam;
  premenna: string = "";
  public rkServiceService2?: RkServiceService;
  abc: string ="";


  displayedColumns: string[] = ['id', 'nazovSpisu', 'datumVytvorenia', 'miestoNarodenia', 'username', 'actions'];
  

  
  

  constructor(public rkServiceService: RkServiceService, ) { 
    
  } 


  //component pre úvodnú obrazovku po úspešnej autentifikácií
  ngOnInit(): void {
 
    this.rkServiceService
    .getSpis()
    .subscribe((result: Spis[]) => (this.spisy = result));
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
