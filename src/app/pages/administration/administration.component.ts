import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-administration',
  styleUrls: ['./administration.component.scss'],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AdministrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
