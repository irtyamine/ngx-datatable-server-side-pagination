import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/model/page';
import { CityModel } from 'src/app/model/city-model';
import { HttpDataService } from 'src/app/service/http-data.service';
import { PaginationService } from 'src/app/service/pagination.service';

@Component({
  selector: 'app-database-data-pagination',
  templateUrl: './database-data-pagination.component.html',
  styleUrls: ['./database-data-pagination.component.css']
})
export class DatabaseDataPaginationComponent implements OnInit {

  page = new Page();
  rows = new Array<CityModel>();

  allEmployee: any;
  temp = [];
  columns = [
    { name: 'Name' },
    { name: 'Country Code' },
    { name: 'District' },
    { name: 'Population' }
  ]

  constructor(private paginationService: PaginationService, private http: HttpDataService) {
    this.page.pageNumber = 0;
    this.page.size = 10;
  }

  ngOnInit() {
    this.http.post('findall', {}).subscribe(
      (res) => {
        this.allEmployee = res.totalCity;
        this.temp = res.totalCity;
        this.rows = res.totalCity;
        this.setPage({ offset: 0 });
      },
      (err) => { },
      () => { }
    );
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.paginationService.getResults(this.page, this.allEmployee).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
    });
  }
  nameFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.page.pageNumber = 0;
  }
  countryCodeFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.countryCode.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.page.pageNumber = 0;
  }
  districtFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.district.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.page.pageNumber = 0;
  }
  populationFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.population.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.page.pageNumber = 0;
  }

}
