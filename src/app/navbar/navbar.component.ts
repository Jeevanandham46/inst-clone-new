import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
buttons=[
  {
    name:'Home',
    icon:'home'
  },{
    name:'Notification',
    icon:'favorite'
  },{
    name:'Profile',
    icon:'person'
  },{
    name:'Signup',
    icon:'fingerprint'
  },{
    name:'Analytics',
    icon:'show_chart'
  }
]
}
