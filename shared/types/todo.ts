// import { ITodo } from '../../server/src/models/Todo';
//
// export type CreateTodoBody = Pick<ITodo, 'title' | 'description'>;
// export type UpdateTodoBody = Partial<Pick<ITodo, 'title' | 'description' | 'completed'>>;
// export type UpdateTodoParams = { id: string };
//
// export type TodoSuccessResponse = {
//     todo: ITodo;
//     message?: string;
// };
//
// export type TodoErrorResponse = {
//     message: string;
// };
//
// export type TodoResponse = TodoSuccessResponse | TodoErrorResponse;
//
//
// export type TodosResponse = {
//     todos: ITodo[];
//     count: number;
// }