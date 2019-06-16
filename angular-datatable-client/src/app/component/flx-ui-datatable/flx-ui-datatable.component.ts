import { Component, OnInit } from '@angular/core';
import { MockServerResultsService } from 'src/app/model/mock-server-results-service';
import { Page } from 'src/app/model/page';
import { CorporateEmployee } from 'src/app/model/corporate-employee';

@Component({
  selector: 'app-flx-ui-datatable',
  templateUrl: './flx-ui-datatable.component.html',
  styleUrls: ['./flx-ui-datatable.component.css']
})
export class FlxUiDatatableComponent implements OnInit {
  page = new Page();
  rows = new Array<CorporateEmployee>();

  constructor(private serverResultsService: MockServerResultsService) {
    this.page.pageNumber = 0;
    this.page.size = 10; 
  }

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo){
    this.page.pageNumber = pageInfo.offset;
    this.serverResultsService.getResults(this.page).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
    });
  }

}
