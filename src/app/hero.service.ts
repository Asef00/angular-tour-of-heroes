import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';  // Hero interface
import { HEROES } from './mock-heroes'; //Mock data
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    if (heroes) {
      this.messageService.add('Successful!');
    } else {
      this.messageService.add('Failed!');
    }
    return heroes;
  }

  constructor(private messageService: MessageService) { }
}
