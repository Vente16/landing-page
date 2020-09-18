import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthserviceService {
  public isLogged = new BehaviorSubject<boolean>(false);
  private headers = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  baseUrl: string = environment.URL_API;

  constructor(private http: HttpClient) {
    this.tokenSession();
  }

  validSession(): Observable<boolean> {
    return this.isLogged.asObservable();
  }

  tokenSession() {
    let token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    let sesion = localStorage.getItem("session")
      ? localStorage.getItem("session")
      : null;

    let validation = token !== null ? true : false;
    validation = sesion === "true" ? validation : false;
    if (!validation) {
      localStorage.clear();
    }
    this.isLogged.next(validation);
  }

  login(data: any) {
    return this.http.post<any>(`${this.baseUrl}/login`, data, this.headers);
  }
}
