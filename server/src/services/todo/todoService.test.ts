import {TodoService} from './todoService';

describe('TodoService', () => {
  const todoService = new TodoService();

  it('should create a new todo', async () => {
    const todoData = { title: 'Test Todo', description: 'This is a test' };
    const todo = await todoService.create(todoData);

    expect(todo.title).toEqual(todoData.title);
    expect(todo.description).toEqual(todoData.description);
  });

  it('should get all todos', async () => {
    const todo1 = await todoService.create({ title: 'Todo 1', description: 'First todo' });
    const todo2 = await todoService.create({ title: 'Todo 2', description: 'Second todo' });

    const todos = await todoService.findAll();

    const expectedTodos = [
      { title: todo1.title, description: todo1.description },
      { title: todo2.title, description: todo2.description }
    ];
    expect(todos).toMatchObject(expectedTodos);
  });
});