"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// this is required to add metadata to an angular module
var core_1 = require("@angular/core");
// this is required to run an angular application in a web browser. 
// in addition, this module also provides ngIf and ngFor directives. 
var platform_browser_1 = require("@angular/platform-browser");
// this gives us directive like ngModel for 2 way data binding. 
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// this enables angular routing 
var router_1 = require("@angular/router");
//Components
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
var employeeList_component_1 = require("./employee/employeeList.component");
var employeeCount_component_1 = require("./employee/employeeCount.component");
var lifeCycleHooks_component_1 = require("./lifeCycleHooks/lifeCycleHooks.component");
var home_component_1 = require("./home/home.component");
var pageNotFound_component_1 = require("./pageNotFound/pageNotFound.component");
//Pipes
var employeeTitle_pipe_1 = require("./employee/employeeTitle.pipe");
//Services
var employee_service_1 = require("./employee/employee.service");
// routing configuration : The order of these routes is very important, the more specific routes should be at the top and so forth.
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'employees', component: employeeList_component_1.EmployeeListComponent },
    { path: 'employees/:code', component: employee_component_1.EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(appRoutes /*, { useHash: true }*/)
            ],
            declarations: [
                app_component_1.AppComponent,
                employee_component_1.EmployeeComponent,
                employeeList_component_1.EmployeeListComponent,
                employeeCount_component_1.EmployeeCountComponent,
                lifeCycleHooks_component_1.LifeCycleHooksComponent,
                home_component_1.HomeComponent,
                pageNotFound_component_1.PageNotFoundComponent,
                employeeTitle_pipe_1.EmployeeTitlePipe
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [employee_service_1.EmployeeService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map