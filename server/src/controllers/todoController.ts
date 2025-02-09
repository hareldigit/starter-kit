import {TodoService} from '@/services/todo/todoService';
import {BaseController} from "@/controllers/baseController";
import {ITodo} from "@/models/Todo";

export class TodoController extends BaseController<ITodo, TodoService> {
  constructor() {
    super(new TodoService());
  }
}