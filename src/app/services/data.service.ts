import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  public userData = new BehaviorSubject([]);

  constructor() {}

  setUserData(data: any) {
    this.userData.next(data);
  }
}
