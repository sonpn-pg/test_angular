import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-angular';
  constructor(private modalService: NgbModal) {}
  ngOnInit() {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
