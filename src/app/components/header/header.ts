import { Component } from '@angular/core';
import {ThemeToggle} from '../theme-toggle/theme-toggle';
import { MatIcon } from '@angular/material/icon';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-header',
  imports: [ThemeToggle, RouterLink, RouterLinkActive, MatIcon, MatBadgeModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
