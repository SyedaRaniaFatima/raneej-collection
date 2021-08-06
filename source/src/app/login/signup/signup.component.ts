import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RaneejService } from 'src/app/shared/raneej.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public service:RaneejService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.service.postUser().subscribe(
      res=>{

      },
      err=>{console.log(err); }
    )
  }

}
