import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss'],
})
export class PrivateHeaderComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {}

  getUsername(): string {
    return this.authService.getUsername();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
