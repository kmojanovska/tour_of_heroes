import { RouterModule, Router } from '@angular/router';
import { HeroService } from './../hero.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  @Output() selected = new EventEmitter();

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe((result: Hero[]) => this.heroes = result);
  }

  // public onSelect(hero: Hero) {
  //   console.log('Selected hero', hero);
  //   this.selected.emit(hero);
  //   // this.router.navigate(['/detail', hero.id]);
  // }

}
