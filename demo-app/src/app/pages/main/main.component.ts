import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/shared/auth';
import {Category} from '@app/shared/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {

  }

  logout(): void {
    this.authenticationService.logout();
  }
}
