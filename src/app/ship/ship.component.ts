import { Component, OnInit } from '@angular/core';
import { ApiService } from "../shared/api.service";
import { Ship } from '../ship.model';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {
  ships: Ship[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getShips().subscribe(ships => {
      this.ships = ships;
    });
  }
}

