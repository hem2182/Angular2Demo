import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee'
import { EmployeeService } from './employee.service'

@Component({
    selector: 'my-employeeList',
    templateUrl: 'app/employee/employeeList.component.html',
    //styles: ['table { color: #369; font-family: Arial, Helvetica, sans-serif; font-size: large; border-collapse: collapse; }','td { border: 1px solid red; }']
    styleUrls: ['app/employee/employee.component.css'],
})
export class EmployeeListComponent implements OnInit {

    statusMessage: string = 'Loading Data... Please Wait.';
    employees: IEmployee[];

    //this will keep track of which radio button is selected.
    selectedEmployeeCountRadioButton: string = "All";

    //this is nothing but a dependency injection in angular. 
    // when angular creates an instance of the EmployeeList component, it also creates an instance of EmployeeService and injects it into employeeList component.
    //and the private variable will be initialized with that singleton instance. 
    constructor(private _employeeService: EmployeeService) {
        //this.employees = [
        //    //{ code: 'emp101', name: "Tom", gender: "Male", annualSalary: 5500, dateOfBirth: "06/25/1988" },
        //    //{ code: 'emp102', name: "Alex", gender: "Male", annualSalary: 5700, dateOfBirth: "09/06/1982" },
        //    //{ code: 'emp103', name: "Mike", gender: "Male", annualSalary: 6500, dateOfBirth: "12/08/1979" },
        //    //{ code: 'emp104', name: "Mary", gender: "Female", annualSalary: 7500, dateOfBirth: "10/14/1980" },
        //    //{ code: 'emp105', name: "Nancy", gender: "Female", annualSalary: 8000, dateOfBirth: "12/15/1982" }
        //]
    }

    ngOnInit(): void {
        this._employeeService.getEmployees()
            .subscribe((employeeData) => this.employees = employeeData,
            (error) => { this.statusMessage = 'Problem with the service. Please try again after some time.'; console.log(error); });
    }

    //this is the method that will be called when the child component custom event is raised. the parameter is string because
    // the custom event passes a value of string type. 
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

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
    trackByEmployeeCode(index: number, employee: any): string {
        return employee.code;
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }
}