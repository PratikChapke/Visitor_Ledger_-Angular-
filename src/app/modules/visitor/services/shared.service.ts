import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  imgData: any;


  getImgData(){
    return this.imgData;
  }

  setImgData(imgData : any){
    this.imgData = imgData;
  }


  constructor(private http: HttpClient) {}
 
 
  updateOutTime(uid: number): void {
    console.log(uid);
    try{
    const url = `http://localhost:8050/visitor/update/${uid}`;
    const body = { "uid": uid};
    console.log( " in update time" , url , body  );
    this.http.get<any>(url).subscribe(data => console.log(data));
    console.log("done")
    }catch(error){
 
      console.log(error)
    }
  }

}
