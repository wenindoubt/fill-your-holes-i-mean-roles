import { Component, OnInit } from '@angular/core';

interface Player {
  name: string;
  positions: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public maxNumOfPlayers = 5;
  public players: Player[] = [
    {
      name: 'Jeffrey Wen',
      positions: ['Jungle', 'Top']
    },
    {
      name: 'Andrew Chang',
      positions: ['Middle', 'Bottom']
    },
    {
      name: 'Alvin Chia',
      positions: ['Support', 'Top']
    },
    {
      name: 'Eric Zhang',
      positions: ['Bottom', 'Middle']
    },
    {
      name: 'Kevin Li',
      positions: ['Top', 'Jungle']
    }
  ];
  public selectedPlayers: Player[] = [];
  public numOfJungleRoles = 0;
  public numOfTopRoles = 0;
  public numOfMiddleRoles = 0;
  public numOfBottomRoles = 0;
  public numOfSupportRoles = 0;

  constructor() {}

  ngOnInit(): void {}

  public onSelect(player: Player) {
    if (this.maxNumOfPlayers !== 0) {
      for (const position of player.positions) {
        if (position === 'Jungle') {
          this.numOfJungleRoles++;
        }
        if (position === 'Top') {
          this.numOfTopRoles++;
        }
        if (position === 'Middle') {
          this.numOfMiddleRoles++;
        }
        if (position === 'Bottom') {
          this.numOfBottomRoles++;
        }
        if (position === 'Support') {
          this.numOfSupportRoles++;
        }
      }
      this.maxNumOfPlayers--;
      this.selectedPlayers.push(player);
    }
  }
}
