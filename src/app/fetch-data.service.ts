import { Injectable } from '@angular/core';
import data from '../assets/data.json'
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  arr_data:[]= data

  getData(){
    return this.arr_data
  }
  constructor() { }
}
