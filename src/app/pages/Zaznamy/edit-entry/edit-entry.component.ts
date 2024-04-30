import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RkServiceService } from 'src/app/services/rk-service.service';
import { Zaznam } from 'src/app/models/Zaznam';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-entry',
  templateUrl: 'edit-entry.component.html',
  styles: [
  ]
})
export class EditEntryComponent implements OnInit{
@Input() zaznam?: Zaznam;
@Output() zaznamUpdated = new EventEmitter<Zaznam[]>();

//konštruktor so zaznamenaním služby
constructor(private rkserviceService: RkServiceService) {}

ngOnInit(): void {

  }
  

//metódy pre input záznamov
updateZaznams(zaznam: Zaznam) {
  this.rkserviceService
  .updateZaznam(zaznam)
  .subscribe((zaznam: Zaznam[]) =>{ this.zaznamUpdated.emit(zaznam)
    window.alert('Bol upravený záznam.');
  }, error => {
    console.log(error);
  }, () => {
    console.log('completed');
  });
}

deleteZaznams(zaznam: Zaznam) {
  this.rkserviceService
  .deleteZaznam(zaznam)
  .subscribe((zaznam: Zaznam[]) =>{ this.zaznamUpdated.emit(zaznam)
    window.alert('Vymazaný záznam: ' + JSON.stringify(zaznam));
  }, error => {
    console.log(error);
  }, () => {
    console.log('completed');
  });
}

createZaznams(zaznam: Zaznam) {
  this.rkserviceService
  .createZaznam(zaznam)
  .subscribe((zaznam: Zaznam[]) => {
    console.log('Update successful. Response:', zaznam);
    this.zaznamUpdated.emit(zaznam);
    window.alert('Bol vytvorený záznam: ' + JSON.stringify(zaznam));
  }, error => {
    console.error('Update failed:', error);
  });
}


}
