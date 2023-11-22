import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.css']
})
export class DeleteProfileComponent {
usres=[
  {name:'kalyan',phone:7028145510 ,social:['insta','facebook']},
  {name:'kalyan',phone:7028145510 ,social:['insta','facebook']},
  {name:'kalyan',phone:7028145510 ,social:['insta','facebook']},
  {name:'kalyan',phone:7028145510 ,social:['insta','facebook']},
]

// style
color='black';
background='pink';
buttonclick(){
 this.background='yellow';
 this.color='red'
}


// toggle
display=false;
togglebut(){
  this.display=!this.display;
}

// <!-- To Do List -->
list:any=[];
adddata(item:String){
  this.list.push({id:this.list.length,name:item})

console.log(this.list)
}

removelist(id:number){
  this.list=this.list.filter((item:any)=>item.id!==id)
console.log(id)
}


// <!-- two way data binding -->
name:any;


// <!-- useing pipes -->
Fname='kalyan patare';
date=Date();



// <!-- Templete Driven Form -->
userlogin(item:any){
console.log(item)
}
}
