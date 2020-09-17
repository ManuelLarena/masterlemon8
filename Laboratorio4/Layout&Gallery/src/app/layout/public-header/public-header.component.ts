import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss'],
})
export class PublicHeaderComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
