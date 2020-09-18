import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TecnologiesListComponent } from "./tecnologies-list/tecnologies-list.component";

const routes: Routes = [
  {
    path: "",
    component: TecnologiesListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnologiesRoutingModule {}
