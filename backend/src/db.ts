import mongoose from 'mongoose';
import { getConfig } from './config';

export const connectDB = async () => {
  try {
    const config = getConfig();
    await mongoose.connect(config.mongodb.uri);
    console.log(`MongoDB Connected to ${config.env} database`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export const disconnectDB = async () => {
  await mongoose.connection.close();
};
