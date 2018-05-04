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
  @Input() itemsCollenction : any = [];

  @Input() iconCollection : boolean = false;


  /*

  //Exemplo de como passar as informações para a o itemsCollection
  //Onde ele é um array de objetos
  itens : any[] = [
    {
      content:"Umuarama", 
      classContent:"indigo-text", 
      secondaryContent: "face", 
      classSecondaryContent: "green-text", 
      router: ['/']
    }
  ];

  */
}