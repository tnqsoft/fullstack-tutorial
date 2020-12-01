import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Category} from '@app/shared/models';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  @Input() category: Category;
  @Output() itemClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
