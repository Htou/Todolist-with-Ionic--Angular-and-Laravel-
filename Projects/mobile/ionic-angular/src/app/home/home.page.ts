import {Component, OnInit} from '@angular/core';
import {DataService, Message} from '../services/data.service';
import {Todo, TodoService} from '../services/todo.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  todos$: Todo[] = [];
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private todoService: TodoService, private data: DataService) {
    sumbitForm(value)
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      title: [null, Validators.required]
    });
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

}
