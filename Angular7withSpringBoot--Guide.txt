Angular Guide for begineer


1. install node.js in your pc
2. create your own folder in D: or E: drive i.e project folder
3. open cmd directly, run following command
E:\00_AngularCliProject\myProjectAngular\ npm install -g @angular/cli@7.3.9

4.check your angular version>ng version
5.create your own project> ng new project-name
6.move to ypur project> cd project-name
7.Start or run your project now> ng serve
8.create service add this line there

constructor(private http:HttpClient) { }

  post(url:string, data:any): Observable<any> 
  {
     return this.http.post("http://localhost:8080/angulardatable/"+url,data);    
  }
9. Open app.module.ts  , add your service file name into 
---providers: [MockServerResultsService,HttpDataService],  Note: all the services should be added here


imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
    HttpClientModule,
  ],

--------------------------Spring boot-----------------------------
1.Go to https://start.spring.io/
2.Artifact and Name should be your project name
3.Package Name as per your requirement
4.Dependency to be added i.e web , devtool, jpa, mysql
5.Now import as existing maven project into workspace
6.Create controller,common,dto,model and service packages into spring project
7.go to this link https://stackoverflow.com/questions/32319396/cors-with-spring-boot-and-angularjs-not-working
8.Copy content of this CORS fllter class add to your project into package common.SimpleCORSFilter 
9.open application.properties files
add following things 

spring.datasource.url= jdbc:mysql://localhost:3306/world
spring.datasource.username=root
spring.datasource.password=Asdf@1234
spring.jpa.hibernate.ddl-auto=update
server.servlet.context-path=/angulardatable

-------------------Do not add this lines---------------------------
spring.profiles.active=mysqldatabase
-------------------------------------------------------------------

10.Create controller check for demo request , try to get ready with your server side implementation ,once done move to angular above section







