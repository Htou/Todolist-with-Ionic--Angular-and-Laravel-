import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {TodoComponent} from './todo.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [TodoComponent],
  exports: [TodoComponent]
})

export class TodoComponentModule {}
