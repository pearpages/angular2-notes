import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from "./auth.guard";

// The main difference when creating a dynamically loaded module is that the feature module must be self-contained and include all the information that Angular requires, including the routing URLs that are supported and the components they display.
// The RouterModule.forChild method is used to define the routing configuration for the feature module, which is then included in the module’s imports property.

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    { path: "main", component: AdminComponent },
    { path: "main", component: AdminComponent, canActivate: [AuthGuard] },
    { path: "**", redirectTo: "auth" }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    declarations: [AuthComponent, AdminComponent],
    providers: [AuthGuard]
})
export class AdminModule { }
