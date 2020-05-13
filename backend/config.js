import dotenv from 'dotenv';

dotenv.config();

export default {
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/nike-store',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'AbKT8lKmPSAcRlD66Rct5ycgyB64IISWTMddHSKr6HiEUZFaUsDxoE6kQD7sHDK1W3cWR4gtFNNMj0mD'
}