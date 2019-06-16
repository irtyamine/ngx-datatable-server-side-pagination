export class CityModel
{
     id:any
	 name:any
	 countryCode:any
	 district:any
     population:any
     
     constructor(id: any, name: any, countryCode: any, district: any,population:any){
        this.id = id;
        this.name = name;
        this.countryCode = countryCode;
        this.district = district;
        this.population = population;
    }
}
