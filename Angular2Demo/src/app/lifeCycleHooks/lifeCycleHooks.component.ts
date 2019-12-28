import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'lifeCycleHook',
    template: `
             You entered: {{simpleInput}}
            `
})
export class LifeCycleHooksComponent implements OnChanges {

    @Input() simpleInput: string;

    ngOnChanges(changes: SimpleChanges): void {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(propertyName + ': currentValue = ' + current + ', previousValue = ' + previous);
        }
    }

}