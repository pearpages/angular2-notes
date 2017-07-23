import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'sp-heroes',
  template: `
    <ul>
      <li (click)="emit(hero)" *ngFor="let hero of myHeroes">{{hero}}</li>
    </ul>
    <ul>
      <li (click)="emit(villain)" *ngFor="let villain of myVillains">{{villain}}</li>
    </ul>
    `
})

export class HeroesComponent implements OnChanges {
  private _myHeroes: Array<string>;
  private _myVillains: Array<string>;

  // Intercept input property changes with a setter
  @Input ('heroes') set myHeroes (heroes: Array<string>) {
    this._myHeroes = heroes.map( hero => hero.toUpperCase());
  }

  @Input() villains: Array<string>;

  @Output('onClick') myOnclick = new EventEmitter<string>();

  get myHeroes(): Array<string> {
    return this._myHeroes;
  }

  get myVillains(): Array<string> {
    return this._myVillains;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['villains']) {
      this._myVillains = changes['villains'].currentValue.map( villain => villain.toUpperCase() );
    }
  }

  emit(character: string) {
    this.myOnclick.emit(character);
  }

}
