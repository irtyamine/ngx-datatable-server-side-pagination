import { Component, OnInit } from '@angular/core';
import { MockServerResultsService } from 'src/app/model/mock-server-results-service';

@Component({
  selector: 'app-loadingbar-datable',
  templateUrl: './loadingbar-datable.component.html',
  styleUrls: ['./loadingbar-datable.component.css']
})
export class LoadingbarDatableComponent implements OnInit {

  
  rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  columns = [
    { prop: 'name', summaryFunc: () => null },
    { name: 'Gender', summaryFunc: (cells) => this.summaryForGender(cells) },
    { name: 'Company', summaryFunc: () => null }
  ];

  constructor(private mockData:MockServerResultsService) {}
  
  private summaryForGender(cells: string[]) {
    const males = cells.filter(cell => cell === 'male').length;
    const females = cells.filter(cell => cell === 'female').length;

    return `males: ${males}, females: ${females}`;
  }

 

  ngOnInit() {

    this.rows = this.mockData.companyData;
  }


}
