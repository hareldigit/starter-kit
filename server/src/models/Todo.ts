import { Schema, model, Document } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TodoSchema = new Schema<ITodo>({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

TodoSchema.pre<ITodo>('save', function (next) {
  this.updatedAt = new Date();
  next();
});

export const Todo = model<ITodo>('Todo', TodoSchema);