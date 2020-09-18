import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginPageComponent } from "./login-page/login-page.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SpinnerComponent } from "../shared/components/spinner/spinner.component";

@NgModule({
  declarations: [LoginPageComponent, SpinnerComponent],
  imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule],
})
export class LoginModule {}
