import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CurdServiceService } from '../curd-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  providers:[CurdServiceService]
})
export class CreateProfileComponent implements OnInit{
  myForm:FormGroup;
create_list:any;
  constructor(private fb:FormBuilder , private curdservice:CurdServiceService,private router: Router){
    this.myForm=this.fb.group({
      FirstName:'',
      LastName:'',
      EmailId:'',
      password:'',
      confirmpassword:''
    })
  }
  navigateToAbout() {
    this.router
    // this.router.navigate(['/read_profile']);
  }
  ngOnInit(): void {
 
  }
  onSubmit(data:any){
this.curdservice.createProfile(data).subscribe((result)=>{
console.log(result)
Swal.fire(
  'Create Data',
  'successfully',
  'success'
)
this.router.navigate(['/read_profile'])
})
this.myForm=this.fb.group({
  FirstName:'',
  LastName:'',
  EmailId:'',
  password:'',
  confirmpassword:''
})
  }
}
