import { Component ,OnInit} from '@angular/core';
import { CurdServiceService } from '../curd-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-read-profile',
  templateUrl: './read-profile.component.html',
providers:[CurdServiceService]
})
export class ReadProfileComponent implements OnInit{
  list:any;
constructor(private curdservice:CurdServiceService,private router: Router){}
ngOnInit(): void {
  this.curdservice.read_profile().subscribe((data:any)=>{
    this.list=data;
    console.log(data)
  })
}
readData(){
  this.router.navigate(['/update_profile']);
}
home_page(){
  this.router.navigate(['/create_profile'])
}

deleteForm(userlist:any){
  this.list.splice(userlist-1,1)
  this.curdservice.deleteProfile(userlist).subscribe((result)=>{
    alert('delete')
    console.log(result)
  })
}


// getdata(data:any){
//   this.curdservice.read_profile().subscribe((data:any)=>{
//     console.log(data)
//   })
// }
}8421846739