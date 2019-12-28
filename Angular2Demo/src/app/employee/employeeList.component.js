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
var employee_service_1 = require("./employee.service");
var EmployeeListComponent = /** @class */ (function () {
    //this is nothing but a dependency injection in angular. 
    // when angular creates an instance of the EmployeeList component, it also creates an instance of EmployeeService and injects it into employeeList component.
    //and the private variable will be initialized with that singleton instance. 
    function EmployeeListComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.statusMessage = 'Loading Data... Please Wait.';
        //this will keep track of which radio button is selected.
        this.selectedEmployeeCountRadioButton = "All";
        //this.employees = [
        //    //{ code: 'emp101', name: "Tom", gender: "Male", annualSalary: 5500, dateOfBirth: "06/25/1988" },
        //    //{ code: 'emp102', name: "Alex", gender: "Male", annualSalary: 5700, dateOfBirth: "09/06/1982" },
        //    //{ code: 'emp103', name: "Mike", gender: "Male", annualSalary: 6500, dateOfBirth: "12/08/1979" },
        //    //{ code: 'emp104', name: "Mary", gender: "Female", annualSalary: 7500, dateOfBirth: "10/14/1980" },
        //    //{ code: 'emp105', name: "Nancy", gender: "Female", annualSalary: 8000, dateOfBirth: "12/15/1982" }
        //]
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (employeeData) { return _this.employees = employeeData; }, function (error) { _this.statusMessage = 'Problem with the service. Please try again after some time.'; console.log(error); });
    };
    //this is the method that will be called when the child component custom event is raised. the parameter is string because
    // the custom event passes a value of string type. 
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    //notice that we have added on more employee compared to the list initialized in the constructor.
    //getEmployees(): void {
    //    this.employees = [
    //        { code: 'emp101', name: "Tom", gender: "Male", annualSalary: 5500, dateOfBirth: "06/25/1988" },
    //        { code: 'emp102', name: "Alex", gender: "Male", annualSalary: 5700, dateOfBirth: "09/06/1982" },
    //        { code: 'emp103', name: "Mike", gender: "Male", annualSalary: 6500, dateOfBirth: "12/08/1979" },
    //        { code: 'emp104', name: "Mary", gender: "Female", annualSalary: 7500, dateOfBirth: "10/14/1980" },
    //    ]
    //}
    //since employee code is a string this methhod returns string
    EmployeeListComponent.prototype.trackByEmployeeCode = function (index, employee) {
        return employee.code;
    };
    EmployeeListComponent.prototype.getTotalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getTotalMaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === "Male"; }).length;
    };
    EmployeeListComponent.prototype.getTotalFemaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === "Female"; }).length;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'my-employeeList',
            templateUrl: 'app/employee/employeeList.component.html',
            //styles: ['table { color: #369; font-family: Arial, Helvetica, sans-serif; font-size: large; border-collapse: collapse; }','td { border: 1px solid red; }']
            styleUrls: ['app/employee/employee.component.css'],
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map