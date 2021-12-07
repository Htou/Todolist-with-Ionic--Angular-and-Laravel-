import {Injectable} from '@angular/core';
import {Http, HttpResponse} from '@capacitor-community/http';

export interface Todo{
  id?: number;
  title: string;
  completed: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private resourceURL = 'http://localhost:8000/todos';

  constructor() {}

  create(todo: Todo): Promise<HttpResponse> {
    const options = {
      url: `${this.resourceURL}`,
      data: todo,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: { 'Content-Type': 'application/json'}
    };

    return Http.post(options);
  }

  update(todo: Todo): Promise<HttpResponse> {
    const options = {
      url: `${this.resourceURL}/${todo.id}`,
      data: todo,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: { 'Content-Type': 'application/json'}
    };

    return Http.put(options);
  }

  findAll(): Promise<HttpResponse> {
    const options = {
      url: `${this.resourceURL}`,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: { 'Content-Type': 'application/json'}
    };

    return Http.get(options);
  }

  find(id: number): Promise<HttpResponse> {
    const options = {
      url: `${this.resourceURL}/${id}`,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: { 'Content-Type': 'application/json'}
    };

    return Http.get(options);
  }

  delete(id: number): Promise<HttpResponse> {
    const options = {
      url: `${this.resourceURL}/${id}`,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: { 'Content-Type': 'application/json'}
    };

    return Http.del(options);
  }
}
