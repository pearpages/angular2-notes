import { Component } from '@angular/core';

import { MissionService } from './mission.service';

@Component({
  selector: 'sp-mission-control',
  template: `
    <h2>Mission Control</h2>
    <button (click)="announce()">Announce mission</button>
    <sp-astronaut *ngFor="let astronaut of astronauts"
      [astronaut]="astronaut">
    </sp-astronaut>
    <h3>History</h3>
    <ul>
      <li *ngFor="let event of history">{{event}}</li>
    </ul>
  `,
  providers: [MissionService],
})
export class MissionControlComponent {
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  announce() {
    const missions = ['Fly to the moon!',
              'Fly to mars!',
              'Fly to Vegas!'];
    let mission = missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= missions.length) { this.nextMission = 0; }
  }
}
