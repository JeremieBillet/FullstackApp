import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserType } from 'src/app/entity/UserType';
import { UserTypeService } from 'src/app/service/userType/user-type.service';

@Component({
  selector: 'app-user-type-form',
  templateUrl: './user-type-form.component.html',
  styleUrls: ['./user-type-form.component.css']
})
export class UserTypeFormComponent implements OnInit {

  userType : UserType = {
    id : null,
    name : null
  }

  constructor(private userTypeService : UserTypeService,
              private activatedRoute : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = +params.get("id");
      this.findUserTypeById(id);
    });
  }

  async findUserTypeById(id : number){
    if (id != 0){
      await this.userTypeService.findUserTypeByIdFromRest(id).toPromise()
        .then(data => this.userType = data);
    }
    
  }

  async saveUserType(){
    if (this.userType.id == null) {
      await this.userTypeService.addUserTypeViaRest(this.userType).toPromise();
    } else {
      await this.userTypeService.updateUserTypeViaRest(this.userType).toPromise();
    }
    //redirection
    this.router.navigate(["user_type"]);
  }

}
