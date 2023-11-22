import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup ,FormControl} from '@angular/forms';
import { CurdServiceService } from '../curd-service.service';
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  providers:[CurdServiceService]
})
export class UpdateProfileComponent implements OnInit{

  Editform=new FormGroup({
    FirstName:new FormControl(''),
    LastName:new FormControl(''),
    EmailId:new FormControl(''),
    password:new FormControl(''),
    confirmpassword:new FormControl(''),
  })
  
  constructor(private router: Router ,private route: ActivatedRoute, private curd_service :CurdServiceService){}
ngOnInit(): void {
  const userid=this.route.snapshot.params['id']
  this.curd_service.getCurrentprofile(userid).subscribe((result)=>{
    console.log(result)
    this.Editform.patchValue(result);
   
  })
}
collection(){
 console.log(this.Editform.value)
 const userId=this.route.snapshot.params['id']
 this.curd_service.updateprofile(userId,this.Editform.value).subscribe((result)=>{
  console.log(result)
  this.router.navigate(['/read_profile'])
 })
}
}