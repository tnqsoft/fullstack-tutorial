import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string;
  age: number;

  number1 = 0;
  number2 = 0;
  number3 = 0;
  number4 = 0;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Nguyen Nhu Tuan';
    this.age = 37;
  }

  onCountChanged(value: number): void {
    this.number3 = value;
    this.number4 = value;
  }
}
