import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthvalidationGuard } from "./shared/guards/authvalidation.guard";
import { CheckUserGuard } from "./shared/guards/check-user.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./landing/landing.module#LandingModule",
  },
  {
    path: "login",
    loadChildren: "./login/login.module#LoginModule",
    canActivate: [CheckUserGuard],
  },
  {
    path: "list",
    loadChildren: "./tecnologies/tecnologies.module#TecnologiesModule",
    canActivate: [AuthvalidationGuard],
  },
  {
    path: "**",
    loadChildren: "./landing/landing.module#LandingModule",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
