import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { map, take } from "rxjs/operators";
import { AuthserviceService } from "src/app/services/authservice.service";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  showLogginButton: boolean = true;
  subscription: Subscription;

  constructor(private authService: AuthserviceService) {
    this.validLoginButton();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  validLoginButton(): void {
    this.subscription = this.authService.validSession().subscribe((data) => {
      this.showLogginButton = !data;
    });
  }

  ngOnInit() {}
}
