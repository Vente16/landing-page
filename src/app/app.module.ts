import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./public/login/login.component";
import { LandingComponent } from "./public/landing/landing.component";
import { FormsModule } from "@angular/forms";
import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy,
} from "@angular/common";
import { TecnologiesComponent } from "./private/tecnologies/tecnologies.component";
import { HttpClientModule } from "@angular/common/http";
import { FilterPipe } from "./pipes/filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    TecnologiesComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: "" },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
