import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'multimidia-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() classe: String = "";
  @Input() alinhamento: String = "right";

  @Input() itemMenu = [];

  /*
  itemMenu = [
    {
      nome: 'Item 1',
      router: ['#']
    },
    {
      nome: 'Item 2',
      router: ['#']
    },
    {
      nome: 'Item 3',
      router: ['#']
    }
  ]
  */
}
