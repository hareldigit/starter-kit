import { TodoController } from '@/controllers/todoController';
import { BaseRoutes } from '@/routes/baseRoutes';
import { ITodo } from '@/models/Todo';
import { TodoService } from '@/services/todo/todoService';

export class TodoRoutes extends BaseRoutes<ITodo, TodoController, TodoService> {
  constructor(controller: TodoController) {
    super(controller);
  }
}

const todoController = new TodoController();
const todoRoutes = new TodoRoutes(todoController);
export const router = todoRoutes.getRouter();
