import { Injectable } from '@angular/core';
import { Raneej } from './raneej.model';

@Injectable({
  providedIn: 'root'
})
export class RaneejService {

  constructor() { }
  formData:Raneej = new Raneej();
}
