import { Injectable } from "@angular/core";
import { IEmployee } from './employee'
// this calls our api over http
import { Http, Response } from '@angular/http'
//since http methods returns Observalble<Response> we need this.
import { Observable } from 'rxjs/Observable';
//We need to convert the Observable<response> to a type suitable to us. for that we need to use the map operator. 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {

    constructor(private _http: Http) { }

    getEmployees(): Observable<IEmployee[]> {
        //return [
        //    { code: 'emp101', name: "Tom", gender: "Male", annualSalary: 5500, dateOfBirth: "06/25/1988" },
        //    { code: 'emp102', name: "Alex", gender: "Male", annualSalary: 5700, dateOfBirth: "09/06/1982" },
        //    { code: 'emp103', name: "Mike", gender: "Male", annualSalary: 6500, dateOfBirth: "12/08/1979" },
        //    { code: 'emp104', name: "Mary", gender: "Female", annualSalary: 7500, dateOfBirth: "10/14/1980" },
        //    { code: 'emp105', name: "Nancy", gender: "Female", annualSalary: 8000, dateOfBirth: "12/15/1982" }
        //]

        return this._http.get('http://localhost:54628/api/employees')
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);

    }

    getEmployee(empCode: string): Observable<IEmployee> {
        return this._http.get('http://localhost:54628/api/employees/' + empCode)
            .map((response: Response) => <IEmployee>response.json())
            .catch(this.handleError);
    }

    //rewriting this method to use promise instead of observable.
    //getEmployee(empCode: string): Promise<IEmployee> {
    //    return this._http.get('http://localhost:54628/api/employees/' + empCode)
    //        .map((response: Response) => <IEmployee>response.json()).toPromise()
    //        .catch(this.handlePromiseError);
    //}

    //this method will be called whenever there is an error.
    handleError(error: Response): any {
        console.error(error);
        return Observable.throw(error);
    }

    handlePromiseError(error: Response): any {
        console.error(error);
        throw (error);
    }

}