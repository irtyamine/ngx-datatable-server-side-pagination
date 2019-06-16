import { Injectable } from '@angular/core';
import { Page } from '../model/page';
import { Observable, of } from 'rxjs';
import { PagedData } from '../model/paged-data';
import { CityModel } from '../model/city-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  companyData:any = []

    serverSideData:any=[];
     

    /**
     * A method that mocks a paged server response
     * @param page The selected page
     * @returns {any} An observable containing the employee data
     */
    public getResults(page: Page,allEmployee:any): Observable<PagedData<CityModel>>
     {
        this.serverSideData=allEmployee; 
        return of(this.serverSideData).pipe(map(data => this.getPagedData(page)));
    }

    /**
     * Package serverSideData into a PagedData object based on the selected Page
     * @param page The page data used to get the selected data from serverSideData
     * @returns {PagedData<CorporateEmployee>} An array of the selected data and page
     */
    private getPagedData(page: Page): PagedData<CityModel> {
        const pagedData = new PagedData<CityModel>();
        page.totalElements = this.serverSideData.length;
        page.totalPages = page.totalElements / page.size;
        const start = page.pageNumber * page.size;
        const end = Math.min((start + page.size), page.totalElements);
        for (let i = start; i < end; i++){
            const jsonObj = this.serverSideData[i];
            // console.log('-----jsonObj----',jsonObj);
            const employee = new CityModel(jsonObj.id,jsonObj.name,jsonObj.countryCode,jsonObj.district,jsonObj.population);
            pagedData.data.push(employee);
            // console.log('-----pagedData.data----',pagedData.data);
        }
        pagedData.page = page;
        return pagedData;
    }

}
