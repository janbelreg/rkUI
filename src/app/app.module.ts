import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { HeaderComponent } from './components/header/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentHeaderComponent } from 'src/app/pages/home/components/content-header/content-header.component';
import { ContentTableComponent } from 'src/app/pages/home/components/content-table/content-table.component';
import { FiltersComponent } from 'src/app/pages/home/components/filters/filters.component'
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { SpisyComponent } from 'src/app/pages/Spisy/spisy/spisy.component';
import { EditSpisyComponent } from 'src/app/pages/Spisy/edit-spisy/edit-spisy/edit-spisy.component';
import { SpisyZaznamComponent } from './pages/Spisy/spisy-zaznam/spisy-zaznam/spisy-zaznam.component';
import { ZaznamyComponent } from './pages/Zaznamy/zaznamy/zaznamy.component';
import { EditEntryComponent } from 'src/app/pages/Zaznamy/edit-entry/edit-entry.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from 'src/app/services/auth.interceptor';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatTableDataSource} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ZaznamysoloComponent } from './components/zaznamysolo/zaznamysolo.component';
import { SpisysoloComponent } from './components/spisysolo/spisysolo.component';
import { MatRadioModule } from '@angular/material/radio';
import { UserspisyComponent } from './pages/userspisy/userspisy.component';

//potrebne zaznamenanie importovanych modulov a componentov

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContentHeaderComponent,
    ContentTableComponent,
    FiltersComponent,
    SpisyComponent,
    EditSpisyComponent,
    SpisyZaznamComponent,
    ZaznamyComponent,
    EditEntryComponent,
    LoginComponent,
    ZaznamysoloComponent,
    SpisysoloComponent,
    UserspisyComponent,
    
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSortModule,
   HttpClientModule,
   FormsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule,
    
    
   

  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
