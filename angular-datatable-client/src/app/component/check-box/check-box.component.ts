import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'src/app/service/pagination.service';
import { HttpDataService } from 'src/app/service/http-data.service';
import { Page } from 'src/app/model/page';
import { CityModel } from 'src/app/model/city-model';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {


  page = new Page();
  rows = new Array<CityModel>();
  rowSelected = [];

  allEmployee: any;
  selected = [];

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

  onSelect({selected}) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
 }

  onActivate(event) {
    // console.log('Activate Event', event);
  }

  add() {
    this.rowSelected=[];
    for (let database of this.selected) {
      this.rowSelected.push(database.name);
    }
    // console.log('---add----', this.rowSelected);
 }

  update() {

  }

  remove() {
    this.selected = [];
    this.rowSelected = [];
  }

  displayCheck(row) {
    // console.log('---displayCheck----',row.name == 'Ede');
    return row.name !== 'Ede';
  }

}
