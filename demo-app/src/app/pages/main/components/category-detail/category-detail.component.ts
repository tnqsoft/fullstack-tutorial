import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '@app/shared/models';
import {TodoService} from '@app/shared/services/todo.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  categoryId: number;
  category: Category;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService,
  ) {
    // this.categoryId = this.route.snapshot.params.id;
    this.route.paramMap.subscribe(params => {
      // tslint:disable-next-line:radix
      this.categoryId = parseInt(params.get('id'));
    });
  }

  ngOnInit(): void {
    this.todoService.getCategory(this.categoryId).subscribe((response: Category) => {
      this.category = response;
    });
  }

}
