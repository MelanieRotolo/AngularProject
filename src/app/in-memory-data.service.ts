import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Xerath' },
      { id: 2, name: 'Janna' },
      { id: 3, name: 'Soraka' },
      { id: 4, name: 'Rakan' },
      { id: 5, name: 'Teemo' },
      { id: 6, name: 'Morgana' },
      { id: 7, name: 'Thresh' },
      { id: 8, name: 'Lux' },
      { id: 9, name: 'Orianna' },
      { id: 10, name: 'Yasuo' }
    ];
    return {heroes};
  }

 
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}