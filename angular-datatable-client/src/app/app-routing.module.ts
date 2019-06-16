import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlxUiDatatableComponent } from './component/flx-ui-datatable/flx-ui-datatable.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { WelcomePageComponent } from './component/welcome-page/welcome-page.component';
import { LoadingbarDatableComponent } from './component/loadingbar-datable/loadingbar-datable.component';
import { FooterTemplateComponent } from './component/footer-template/footer-template.component';
import { DatabaseDataPaginationComponent } from './component/database-data-pagination/database-data-pagination.component';


const routes: Routes = [

  
  { path:'loadingbar-datatable' , component: LoadingbarDatableComponent },
  { path:'flx-ui-datatable' , component: FlxUiDatatableComponent },
  { path:'footer-template' , component: FooterTemplateComponent },
  { path:'database-data-pagination' , component: DatabaseDataPaginationComponent },
  { path:'**' , component: WelcomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
