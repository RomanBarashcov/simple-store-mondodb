import mongoose from 'mongoose';
 
import categorySeeder from './backend/seeders/categorySeeder';
import productSeeder from './backend/seeders/productSeeder';
import userSeeder from './backend/seeders/userSeeder';

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/nike-store';
 
/**
 * Seeders List
 * order is important
 * @type {Object} 
 */
export const seedersList = {
    userSeeder,
    categorySeeder,
    productSeeder
};
/**
 * Connect to mongodb implementation
 * @return {Promise} 
 */
export const connect = async () => await mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise} 
 */
export const dropdb = async () => mongoose.connection.db.dropDatabase();