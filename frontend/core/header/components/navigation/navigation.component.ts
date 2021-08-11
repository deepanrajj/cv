import {Component, Input} from '@angular/core';
import {NavigationMenu} from '../../models/header.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() menus: NavigationMenu[];
}
