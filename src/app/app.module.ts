import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { PropertiesComponent } from './properties/properties.component';
import { TextElementComponent } from './elements/text-element/text-element.component';
import { SelectElementComponent } from './elements/select-element/select-element.component';
import { TableElementComponent } from './elements/table-element/table-element.component';
import { ButtonElementComponent } from './elements/button-element/button-element.component';
import { ShapeElementComponent } from './elements/shape-element/shape-element.component';
import { ListElementComponent } from './elements/list-element/list-element.component';

const routes: Routes = [
  { path: 'Text', component: TextElementComponent },
  { path: 'Select', component: SelectElementComponent },
  { path: 'Table', component: TableElementComponent },
  { path: 'Shape', component: ShapeElementComponent },
  { path: 'Button', component: ButtonElementComponent },
  { path: 'List', component: ListElementComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSidebarComponent,
    PropertiesComponent,
    TextElementComponent,
    SelectElementComponent,
    TableElementComponent,
    ButtonElementComponent,
    ShapeElementComponent,
    ListElementComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
