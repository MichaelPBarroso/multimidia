import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'multimidia-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() nomeCollection : string = null;
  @Input() itensCollenction : any = [
    
  ];
}