import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isAuthed = false;

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.auth.isAuthed$.subscribe(isLogged => {
      this.isAuthed = isLogged;
    });
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigateByUrl('/login');
    });
  }
}
