// this is required to add metadata to an angular module
import { NgModule } from '@angular/core';
// this is required to run an angular application in a web browser. 
// in addition, this module also provides ngIf and ngFor directives. 
import { BrowserModule } from '@angular/platform-browser';
// this gives us directive like ngModel for 2 way data binding. 
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
// this enables angular routing 
import { RouterModule, Routes } from '@angular/router';
//Components
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeCountComponent } from './employee/employeeCount.component';
import { LifeCycleHooksComponent } from './lifeCycleHooks/lifeCycleHooks.component';
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

//Pipes
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe'
//Services
import { EmployeeService } from './employee/employee.service';

// routing configuration : The order of these routes is very important, the more specific routes should be at the top and so forth.
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/:code', component: EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes/*, { useHash: true }*/)
    ],
    declarations: [
        AppComponent,
        EmployeeComponent,
        EmployeeListComponent,
        EmployeeCountComponent,
        LifeCycleHooksComponent,
        HomeComponent,
        PageNotFoundComponent,
        EmployeeTitlePipe
    ],
    bootstrap: [AppComponent],
    providers: [EmployeeService]
})
export class AppModule { }
