import { Component, OnInit } from '@angular/core';
import { UserType } from 'src/app/entity/UserType';
import { UserTypeService } from 'src/app/service/userType/user-type.service'
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-type-board',
  templateUrl: './user-type-board.component.html',
  styleUrls: ['./user-type-board.component.css']
})
export class UserTypeBoardComponent implements OnInit {

  userTypes = [];
  errorMessage : any;
  errorStatus : any;
  dtTrigger: Subject<any> = new Subject();

  constructor(private userTypeService : UserTypeService, private router : Router) { }

  ngOnInit(): void {
    this.getAllUserTypes();
  }

  async getAllUserTypes(){
    await this.userTypeService.getAllUserTypeFromRest().toPromise()
      .then(data => {
        this.userTypes = data; 
        this.dtTrigger.next();}
    );
  }

  newUserType(){
    this.router.navigate(["user_type/edit", 0])
  }

  updateUserType(id : number){
    this.router.navigate(["user_type/edit", id])
  }

  async deleteUserType(id : number){
    await this.userTypeService.removeUserTypeViaRest(id).toPromise()
      .then(()=>{}, 
            error => {this.errorMessage = error.error;
                      this.errorStatus = error.status;
            }
      );
    if (this.errorStatus != 401)  window.location.reload();
  }

}
