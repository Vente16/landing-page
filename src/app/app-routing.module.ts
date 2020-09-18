import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./landing/landing.module#LandingModule",
  },
  {
    path: "login",
    loadChildren: "./login/login.module#LoginModule",
  },
  {
    path: "list",
    loadChildren: "./tecnologies/tecnologies.module#TecnologiesModule",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
