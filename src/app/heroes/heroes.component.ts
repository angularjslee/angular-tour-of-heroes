import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];
  constructor(private heroService: HeroService,
              private messageService: MessageService) { }
  /*
  hero: Hero = {
    id: 0,
    name: 'Windestorm'
  };
*/
  //heroes = HEROES;
  ngOnInit(): void {
    this.getHeroes();
  }



  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }

  getHeroes(): void{
    //Original
    //this.heroes = this.heroService.getHeroes();

    //Observable
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
