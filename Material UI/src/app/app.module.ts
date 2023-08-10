import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {RadioButtonComponent} from './radio-button/radio-button.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {InputComponent} from './input/input.component';
import {SelectComponent} from './select/select.component';
import {TabsComponent} from './tabs/tabs.component';
import {TablesComponent} from './tables/tables.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    RadioButtonComponent,
    CheckboxComponent,
    InputComponent,
    SelectComponent,
    TabsComponent,
    TablesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
