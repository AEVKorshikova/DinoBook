import { Component, Input , OnInit} from '@angular/core';

@Component({
  selector: 'app-dino-card',
  templateUrl: './dino-card.component.html',
  styleUrls: ['./dino-card.component.scss']
})
export class DinoCardComponent implements OnInit
{
  @Input() text: string = ' ' ;
  @Input() img: string = ' ' ;
  constructor(){}

  ngOnInit():void{

  }

}
