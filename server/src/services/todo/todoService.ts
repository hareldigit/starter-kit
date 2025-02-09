import { Todo, ITodo } from '@/models/Todo';
import {BaseService} from "@/services/baseService";

export class  TodoService extends BaseService<ITodo>{
  constructor() {
    super(Todo);
  }
}