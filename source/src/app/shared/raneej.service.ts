import { Injectable } from '@angular/core';
import { Raneej } from './raneej.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RaneejService {

  constructor(private http:HttpClient) { }
  formData:Raneej = new Raneej();

  readonly baseURl = "http://localhost:62727/api/Users"
  postUser(){
    return this.http.post(this.baseURl,this.formData);
  }
}
