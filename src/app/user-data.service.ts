import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  getData()
  {
    return {
      name:'Raman',
      age:30,
    }
  }
  
}
