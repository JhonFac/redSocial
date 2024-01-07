import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface UpgradeData {
  id: number;
  title: string;
  content: string;
  like: string;
  createdAt: string;
}

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {
  upgradeData: UpgradeData[] = [];
  showForm = false;
  newPostForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadData();
    this.initializeForm();
  }

  loadData() {

    this.http.get<UpgradeData[]>('http://localhost:3000/posts/').subscribe(data => {
      this.upgradeData = data;
      console.log('Respuesta del servicio API:', data);
    });
  }

  initializeForm() {
    this.newPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      userId: ['1', Validators.required],
      createdAt: [''],
      like: ['0']
    });
  }

  showNewPostForm() {
    this.showForm = true;
  }

  createNewPost() {
    this.showForm = false;
    const newPostData = this.newPostForm.value;
    console.log('Data from form:', newPostData);
    this.http.post('http://localhost:3000/posts', newPostData).subscribe(response => {
      console.log('creacion de post exitosa:', response);
    });
    this.loadData();
  }

  updateLikes(upgrade: UpgradeData) {
    upgrade.like += 1;
    this.http.put(`http://localhost:3000/posts/${upgrade.id}`, { like: upgrade.like }).subscribe(response => {
      console.log('Likes actualizados:', response);
    });
  }

  formatCreatedAt(createdAt: string): string {
    const fecha = new Date(createdAt);
    return fecha.toLocaleString('es-ES', { dateStyle: 'full', timeStyle: 'short' });
  }

}
