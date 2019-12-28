import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
import { ISubscription } from 'rxjs/Subscription';


@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    //styles: ['table { color: #369; font-family: Arial, Helvetica, sans-serif; font-size: large; border-collapse: collapse; }','td { border: 1px solid red; }']
    styleUrls: ['app/employee/employee.component.css'],

})
export class EmployeeComponent implements OnInit {
    employee: IEmployee;
    statusMessage: string = "Loading Data. Please Wait...";

    subscription: ISubscription;

    constructor(private _employeeSeervice: EmployeeService, private _activatedRoute: ActivatedRoute, private _router: Router) { }

    ngOnInit() {

        let empCode = this._activatedRoute.snapshot.params['code'];

        this.subscription = this._employeeSeervice.getEmployee(empCode)
            .retryWhen((err) => {
                return err.scan((retryCount) => {
                    retryCount += 1
                    if (retryCount < 6) {
                        this.statusMessage = "Retrying... Attempt #" + retryCount;
                        return retryCount;
                    }
                    else {
                        throw (err);
                    }
                }, 0).delay(1000)
            })
            .subscribe(
                (employeeData) => {
                    if (employeeData == null)
                        this.statusMessage = 'Employee with the specified emp code does not exists.';
                    else
                        this.employee = employeeData
                },
                (error) => { this.statusMessage = 'Problem with the service. Please try again after some time.'; console.log(error) }
            );
    }

    cancelRequest(): void {
        this.statusMessage = "Request Cancelled";
        this.subscription.unsubscribe();

    }

    goToEmployeeList(): void {
        this._router.navigate(['/employees']);
    }
}