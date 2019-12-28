"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// this calls our api over http
var http_1 = require("@angular/http");
//since http methods returns Observalble<Response> we need this.
var Observable_1 = require("rxjs/Observable");
//We need to convert the Observable<response> to a type suitable to us. for that we need to use the map operator. 
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
require("rxjs/add/observable/throw");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(_http) {
        this._http = _http;
    }
    EmployeeService.prototype.getEmployees = function () {
        //return [
        //    { code: 'emp101', name: "Tom", gender: "Male", annualSalary: 5500, dateOfBirth: "06/25/1988" },
        //    { code: 'emp102', name: "Alex", gender: "Male", annualSalary: 5700, dateOfBirth: "09/06/1982" },
        //    { code: 'emp103', name: "Mike", gender: "Male", annualSalary: 6500, dateOfBirth: "12/08/1979" },
        //    { code: 'emp104', name: "Mary", gender: "Female", annualSalary: 7500, dateOfBirth: "10/14/1980" },
        //    { code: 'emp105', name: "Nancy", gender: "Female", annualSalary: 8000, dateOfBirth: "12/15/1982" }
        //]
        return this._http.get('http://localhost:54628/api/employees')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EmployeeService.prototype.getEmployee = function (empCode) {
        return this._http.get('http://localhost:54628/api/employees/' + empCode)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //rewriting this method to use promise instead of observable.
    //getEmployee(empCode: string): Promise<IEmployee> {
    //    return this._http.get('http://localhost:54628/api/employees/' + empCode)
    //        .map((response: Response) => <IEmployee>response.json()).toPromise()
    //        .catch(this.handlePromiseError);
    //}
    //this method will be called whenever there is an error.
    EmployeeService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    EmployeeService.prototype.handlePromiseError = function (error) {
        console.error(error);
        throw (error);
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map