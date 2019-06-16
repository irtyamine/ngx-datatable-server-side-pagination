import { Component, OnInit } from '@angular/core';
import { MockServerResultsService } from 'src/app/model/mock-server-results-service';

@Component({
  selector: 'app-footer-template',
  templateUrl: './footer-template.component.html',
  styleUrls: ['./footer-template.component.css']
})
export class FooterTemplateComponent implements OnInit {

  rows = [];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  constructor(private serverResultsService: MockServerResultsService) { }

  ngOnInit() {

    this.rows = this.serverResultsService.companyData;
  }

  
 

}
