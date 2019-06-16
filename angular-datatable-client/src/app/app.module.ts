import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MockServerResultsService } from './model/mock-server-results-service';
import { FlxUiDatatableComponent } from './component/flx-ui-datatable/flx-ui-datatable.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { WelcomePageComponent } from './component/welcome-page/welcome-page.component';
import { LoadingbarDatableComponent } from './component/loadingbar-datable/loadingbar-datable.component';
import { FooterTemplateComponent } from './component/footer-template/footer-template.component';
import { DatabaseDataPaginationComponent } from './component/database-data-pagination/database-data-pagination.component';
import { HttpDataService } from './service/http-data.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
   AppComponent,
   FlxUiDatatableComponent,
   HomePageComponent,
   WelcomePageComponent,
   LoadingbarDatableComponent,
   FooterTemplateComponent,
   DatabaseDataPaginationComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    HttpClientModule
  ],
  providers: [MockServerResultsService,HttpDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
