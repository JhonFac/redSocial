import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Agregamos FormBuilder y FormGroup

interface UserData {
  fullName: string;
  age: number;
  email: string;
  password: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userData: UserData;
  profileForm: FormGroup;
  showSuccessAlert = false;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.http.get<UserData>('http://localhost:3000/users/1').subscribe(data => {
      this.userData = data;
      this.initializeForm()
      console.log('Respuesta del servicio API:', data);
    });

  }

  initializeForm() {
    this.profileForm = this.formBuilder.group({
      fullName: [this.userData.fullName, Validators.required],
      email: [this.userData.email, [Validators.required, Validators.email]],
      age: [this.userData.age, Validators.required],
      password: [this.userData.password, Validators.required]
    });
  }

  updateProfile() {
    const updatedData = this.profileForm.value;
    console.log('data capturada de formulario:', updatedData);

    this.http.put('http://localhost:3000/users/1', updatedData).subscribe(response => {
      console.log('Actualización exitosa:', response);
      this.showSuccessAlert = true;
      this.loadData();

      setTimeout(() => {
        this.closeAlert();
      }, 4000);
    });
  }

  closeAlert() {
    this.showSuccessAlert = false;
  }
}
