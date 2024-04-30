import { Component } from '@angular/core';
import {User} from 'src/app/models/user';
import {AuthService} from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'rk02';
  user = new User();
  currentUser = '';
  actUser = '';


  constructor(private authService: AuthService, private router: Router) {}
   //metóda pre registráciu
  register(user: User) {
    this.authService.register(user).subscribe();
  }
  //metóda pre prihlásenie
  login(user: User) {
    this.authService.login(user).subscribe((token: string) => {
      localStorage.setItem('authToken', token);
      console.log('logged in succesfuly' + token);
      this.router.navigate(['/home']);
    });
  }
  
    getme() {
      this.authService.getMe().subscribe((name: string) => {
        console.log(name);
      });
    }



    }