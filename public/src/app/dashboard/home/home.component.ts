import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;

  constructor(
    private readonly _auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this._auth.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
  }

  refresh() {
    this.router.navigateByUrl('/dashboard/home');
    this.ngOnInit();
  }
}
