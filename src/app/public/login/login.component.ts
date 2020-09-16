import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  submitted: boolean = false;
  loading: boolean = false;

  constructor(private fb: FormBuilder) {
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
    console.log("Oee!");
    this.submitted = true;
    let { valid } = this.loginForm;
    if (valid) {
      let { email, password, session } = this.loginForm.value;
      console.log(this.loginForm.value);
    }
  }

  ngOnInit() {}
}
