import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class CurdServiceService {

  constructor(private http:HttpClient) { }
  url='http://localhost:3000/posts';

urlPost='http://localhost:3001/Customer';
urlGet='http://localhost:3001/Customer/getAllRegisterCustomer';
getUrl='http://localhost:3001/Customer/getOneCustomerById/:id'
urlUpdate='http://localhost:3001/Customer/updateOneCustomerById/:id';
urlDelete='http://localhost:3001/Customer/getOneCustomerDeleteByID/:id';

  read_profile(){
return this.http.get(this.url)
  }


  createProfile(data:any){
    return this.http.post(this.url,data)
  }

  getCurrentprofile(id:any){
return this.http.get(`${this.url}/${id}`)
  }
  updateprofile(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }

  deleteProfile(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
}
