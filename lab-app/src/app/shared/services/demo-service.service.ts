import { Injectable } from '@angular/core';

@Injectable({
  // providedIn: 'root'
})
export class DemoServiceService {
  message: string;

  constructor() {
    this.message = 'Demo Message here';
  }

  getMessage(): string {
    return this.message;
  }
}
