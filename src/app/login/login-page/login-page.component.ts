import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthserviceService } from "src/app/services/authservice.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  submitted: boolean = false;
  loading: boolean = false;
  error: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthserviceService,
    private route: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(this.emailReg)]],
      password: ["", [Validators.required, Validators.minLength(3)]],
      session: [false, []],
    });
  }

  onSubmit() {
    this.submitted = true;
    let { valid } = this.loginForm;

    if (valid) {
      let info = this.loginForm.value;
      this.loading = true;

      setTimeout(() => {
        this.authService.login(info).subscribe(
          (data) => {
            localStorage.setItem("token", data.token);
            localStorage.setItem("session", "" + info.session);
            this.authService.isLogged.next(true);
            this.loading = false;
            this.route.navigate(["../list"]);
          },
          (error) => {
            console.log(error);
            this.loading = false;
            this.error = true;
          }
        );
      }, 2000);
    }
  }

  ngOnInit() {}
}
