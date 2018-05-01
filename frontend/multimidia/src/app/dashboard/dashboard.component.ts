import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  itens : any[] = [
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
    "item 6",
    "item 7",
  ]

  itens2 : any[] = [
    "item 12",
    "item 22",
    "item 33",
    "item 44",
    "item 55",
    "item 65",
    "item 76",
  ]
}
