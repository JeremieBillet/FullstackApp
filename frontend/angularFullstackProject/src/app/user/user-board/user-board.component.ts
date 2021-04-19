import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from 'src/app/entity/User';
import { UserService } from 'src/app/service/user/user.service'
 
@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.css']
})
export class UserBoardComponent implements OnInit {

  users =[] ;
  dtTrigger: Subject<any> = new Subject();

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
    this.findAllUsers()
  }

  /*
  Permet de recuperer les users via le web service
  */
  async findAllUsers(){
    await this.userService.getAllUserFromRest().toPromise()
      .then(data => {
        this.users = data;
        this.dtTrigger.next();
      }   
    );
  }

  /*
  Redirige vers le formulaire avec id = 0 pour nouveau user
  */
  newUser(){
    this.router.navigate(["user/edit", 0])
  }

  /*
  Redirige vers le formulaire avec id user
  */
  updateUser(id : number){
    this.router.navigate(["user/edit", id])
  }

  /*
  permet de supprimer un user
  */
  async deleteUser(id : number){
    await this.userService.removeUserViaRest(id).toPromise().then(()=>window.location.reload());
  }

}
