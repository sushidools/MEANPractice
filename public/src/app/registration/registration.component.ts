import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { User } from '../models';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  user = new User();
  sub: Subscription;
  registrationErrors: string[] = [];

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit() {}

  onSubmit(event: Event, user: User) {
    event.preventDefault();
    this.sub = this.auth.register(user).subscribe(
      loggedUser => {
        console.log(loggedUser);
        this.router.navigateByUrl('dashboard');
      },
      error => {
        console.log(error);
        this.handleErrors(error.error);
      }
    );
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  private handleErrors(error: string | string[]) {
    this.registrationErrors = Array.isArray(error) ? error : [error];
  }
}
