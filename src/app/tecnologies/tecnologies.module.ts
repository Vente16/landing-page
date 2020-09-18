import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TecnologiesRoutingModule } from "./tecnologies-routing.module";
import { TecnologiesListComponent } from "./tecnologies-list/tecnologies-list.component";
import { FilterPipe } from "./pipes/filter.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [TecnologiesListComponent, FilterPipe],
  imports: [CommonModule, TecnologiesRoutingModule, FormsModule],
})
export class TecnologiesModule {}
