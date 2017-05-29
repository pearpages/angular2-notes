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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var auth_component_1 = require("./auth.component");
var admin_component_1 = require("./admin.component");
// The main difference when creating a dynamically loaded module is that the feature module must be self-contained and include all the information that Angular requires, including the routing URLs that are supported and the components they display.
// The RouterModule.forChild method is used to define the routing configuration for the feature module, which is then included in the module’s imports property.
var routing = router_1.RouterModule.forChild([
    { path: "auth", component: auth_component_1.AuthComponent },
    { path: "main", component: admin_component_1.AdminComponent },
    { path: "**", redirectTo: "auth" }
]);
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, routing],
            declarations: [auth_component_1.AuthComponent, admin_component_1.AdminComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
