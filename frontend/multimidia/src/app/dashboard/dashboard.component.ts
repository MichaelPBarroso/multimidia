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

  color_text : string = 'green-text text-darken-4';

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

  itens : any[] = [
    {
      content:"Umuarama", 
      classContent: this.color_text,
      secondaryContent: "send", 
      classSecondaryContent: this.color_text,
      router: ['/']
    },
    {
      content:"Paris", 
      classContent:this.color_text, 
      secondaryContent: "send", 
      classSecondaryContent: this.color_text, 
      router: ['/']
    },
    {
      content:"Piracuama", 
      classContent:this.color_text,
      secondaryContent: "send", 
      classSecondaryContent: this.color_text
    },
    {
      content:"Pirajussara", 
      classContent:this.color_text,
      secondaryContent: "send", 
      classSecondaryContent: this.color_text
    },
    {
      content:"Valo Verde", 
      classContent:this.color_text,
      secondaryContent: "send", 
      classSecondaryContent: this.color_text
    },
    {
      content:"Vale das Virtudes", 
      classContent:this.color_text,
      secondaryContent: "send", 
      classSecondaryContent: this.color_text
    },
    {
      content:"Novo Oriente", 
      classContent:this.color_text,
      secondaryContent: "send", 
      classSecondaryContent: this.color_text
    },
    {
      content:"Novo Campo Limpo", 
      classContent:this.color_text,
      secondaryContent: "send", 
      classSecondaryContent: this.color_text
    },
    {
      content:"Jardim das Oliveiras", 
      classContent:this.color_text,
      secondaryContent: "send", 
      classSecondaryContent: this.color_text
    },
    {
      content:"Ipê", 
      classContent:this.color_text,
      secondaryContent: "send", 
      classSecondaryContent: this.color_text
    },
    {
      content:"Mitsutani", 
      classContent:this.color_text,
      secondaryContent: "send", 
      classSecondaryContent: this.color_text
    }
  ]

  itens2 : any[] = [
    {content:"item 12"},
    {content:"item 22"},
    {content:"item 33"},
    {content:"item 44"},
    {content:"item 55"},
    {content:"item 65"},
    {content:"item 76"},
  ]
}
