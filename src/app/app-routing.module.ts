import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./public/login/login.component";
import { LandingComponent } from "./public/landing/landing.component";
import { TecnologiesComponent } from "./private/tecnologies/tecnologies.component";

const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "list",
    component: TecnologiesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
