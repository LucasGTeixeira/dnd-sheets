import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormFichaComponent } from './components/form-ficha/form-ficha.component';
import { SheetsTableComponent } from './sheets-table/sheets-table.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    AppComponent,

    FormFichaComponent,
     SheetsTableComponent,
     DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
