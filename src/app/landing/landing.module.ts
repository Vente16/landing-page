import { NgModule } from "@angular/core";
import {
  APP_BASE_HREF,
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from "@angular/common";

import { LandingRoutingModule } from "./landing-routing.module";
import { LandingPageComponent } from "./landing-page/landing-page.component";

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, LandingRoutingModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: "" },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
})
export class LandingModule {}
