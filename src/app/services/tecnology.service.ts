import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class TecnologyService {
  public headers = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  baseUrl: string = environment.URL_API;

  constructor(private http: HttpClient) {}

  getTecnologies() {
    return this.http.get<any>(`${this.baseUrl}/techs`, this.headers);
  }
}
