import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') localchild!: NgForm;
  title = 'testproject';
  btn = '';
  signupform!: FormGroup;
  // onSubmit(form: NgForm){
  //   console.log(form);
  // }
  constructor(private http: HttpClient) { }
  ngOnInit(){
    this.signupform = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl()
    });
  }
  suggest(){
    this.localchild.form.patchValue({
      userData: {
        email: 'dasdasdasdasd'
      }
    });
  }
  onSubmit(){
    console.log(this.signupform.controls['email'].value);
    // this.http.get()
  }
}
