import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/entity/User';
import { UserType } from 'src/app/entity/UserType'
import { UserService } from 'src/app/service/user/user.service';
import { UserTypeService } from 'src/app/service/userType/user-type.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user : User = {
    id : null,
    lastName : null,
    firstName : null,
    userType : new UserType
  };
  userTypes = [];

  constructor(private userService : UserService, 
              private userTypeService : UserTypeService, 
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllUserTypes();
    this.activatedRoute.paramMap.subscribe(params => {
      const id = +params.get("id");
      this.findUserById(id);
    });
  }

  async getAllUserTypes(){
    await this.userTypeService.getAllUserTypeFromRest().toPromise()
      .then(data => {this.userTypes = data;}
    );    
  }

  async findUserById(id:number){
    if (id != 0){
      await this.userService.findUserByIdFromRest(id).toPromise()
        .then(data => this.user = data);
    }    
  }

  async saveUser(){
    if (this.user.id == null) {
      await this.userService.addUserViaRest(this.user).toPromise();
    } else {
      await this.userService.updateUserViaRest(this.user).toPromise();
    }
    this.router.navigate(["user"]);
  }

}
