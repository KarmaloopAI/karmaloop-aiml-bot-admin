import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { NewbotComponent } from './pages/newbot/newbot.component';
import { DxChartModule } from 'devextreme-angular/ui/chart';
import { CommonModule } from "@angular/common";
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import {DxButtonModule} from 'devextreme-angular/ui/button';
import {  DxFormModule } from 'devextreme-angular/ui/form';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';

const routes: Routes = [
  
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'newbot',
    component: NewbotComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [ AuthGuardService ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxChartModule, CommonModule,DxDataGridModule, DxButtonModule, DxFormModule,DxTextBoxModule,DxSelectBoxModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent,NewbotComponent]
  
})
export class AppRoutingModule { }
