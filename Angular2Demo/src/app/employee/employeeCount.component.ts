import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html',
    styleUrls: ['app/employee/employeeCount.component.css']
})
export class EmployeeCountComponent {

    selectedRadioButtonValue: string = "All";

    //custom eventw with the event type as string. this event data is called event payload. 
    @Output()
    countRadioButttonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;

    //function that raises our custom event
    onRadioButtonSelectionChange() {
        this.countRadioButttonSelectionChanged.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    }

}