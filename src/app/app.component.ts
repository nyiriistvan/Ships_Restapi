<<<<<<< HEAD
/*
 File: app.components.ts
 Author: Nyiri István
 Copyright: 2023, Nyiri István
 Group: Szoft_II_N
 Date: 2023-04-28
 Github: https://github.com/nyiriistvan
 Licenc: GNU GPL
*/
import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/api.service';
import { NgForm } from '@angular/forms';
=======
import { Component } from '@angular/core';
>>>>>>> 546280de7bde24f5e825fcf74ff869f1c632789b

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
<<<<<<< HEAD
export class AppComponent implements OnInit {

  ships:any = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getShips();
  }

  getShips() {  
    this.api.getShips().subscribe({
      next: (ships) => {
        console.log(ships)
        this.ships = ships;
      },
      error: (err) => {
        console.log('Hiba! A REST API elérése sikertelen!')
        console.log(err)
      }
    });
  }

  addShips(ship: any) {
    this.api.addShips(ship).subscribe({
      next: (newShip) => {
        console.log('Az új hajó hozzáadva a listához:');
        console.log(newShip);
        this.ships.push(newShip);
      },
      error: (err) => {
        console.log('Hiba a hajó hozzáadása során:');
        console.log(err);
      }
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newShip = {
        name: form.value.name,
        length: form.value.length,
        price: form.value.price,
        person: form.value.person,
        trailer: form.value.trailer
      };
      this.addShips(newShip);
      form.reset();
    }
  }
  
=======
export class AppComponent {
  title = 'Ships';
>>>>>>> 546280de7bde24f5e825fcf74ff869f1c632789b
}
