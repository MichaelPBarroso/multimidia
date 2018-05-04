import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './/dashboard-routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';

import { MzNavbarModule, MzCollectionModule, MzIconModule, MzIconMdiModule } from 'ng2-materialize';
import { CollectionComponent } from '../components/collection/collection.component'

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    
    MzNavbarModule,
    MzCollectionModule,
    MzIconModule,
    MzIconMdiModule
  ],
  declarations: [
    DashboardComponent, 
    NavbarComponent,
    CollectionComponent
  ]
})
export class DashboardModule { }
