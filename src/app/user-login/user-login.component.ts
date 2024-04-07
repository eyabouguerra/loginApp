import { Component } from '@angular/core';
import { User } from '../user';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user: User = new User();

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  userRegister() {
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(data => {
      alert("Successfully User is register?")
    }, error => alert("Sorry User not register"));
  }

}
