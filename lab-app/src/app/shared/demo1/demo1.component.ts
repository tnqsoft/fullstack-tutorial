import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {
    this.count++;
    this.countChange.emit(this.count);
  }
}
