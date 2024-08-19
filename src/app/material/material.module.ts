import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
const MaterialComponents =[
  MatSidenavModule,
  MatMenuModule,
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule

];
 
@NgModule({
 
  imports: [MaterialComponents],
  exports  : [MaterialComponents]
   
  
})
export class MaterialModule { }
