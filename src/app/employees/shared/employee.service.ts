import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
// import { Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from  'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Employee} from'./employee.model'

@Injectable()
export class EmployeeService {

  selectedEmployee : Employee;
  employeeList : Employee[];
  constructor(private http : HttpClient) { }

  postEmployee(emp : Employee){
    var body = JSON.stringify(emp);
    var headerOptions = new HttpHeaders({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:50658/api/Employees',body,requestOptions).map(x => x);
  }

  putEmployee(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:50658/api/Employees/' + id,body,requestOptions).map(res => res);
  }
  getEmployeeList(){
    this.http.get('http://localhost:50658/api/Employees')
    .pipe(map((data : Response) =>{
      return data as Employee[];
    })).toPromise().then(x => {
      this.employeeList = x;
    })
  }

  deleteEmployee(id: number) {
    return this.http.delete('http://localhost:50658/api/Employees/' + id).map(res => res);
  }
}
