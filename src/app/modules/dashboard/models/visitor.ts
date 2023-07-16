import { Time } from "@angular/common";
 
export interface Visitor {
    
    // id: number;
    // name: string;
    // email: string;
    // age: number;
    // gender: string;
    // contactNumber: string;
    // reasonForMeeting: string;
    // visitorOrganization: string;
    // inTime : string;
    // outTime : string;
 
    id: number,
    name: string,
    email: string,
    age: 42,
    gender:string,
    contactNumber: string,
    reasonForMeeting: string,
    visitorOrganization: string,
    employee: {
        id: number,
        name: string,
    },
    inTime: string,
    outTime: string,
    date: string,
    whomToMeet: string,
    imgPath: string,
    uId: number
 
  }