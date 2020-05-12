import { Seeder } from 'mongoose-data-seed';
import User from '../models/userModel';
 
const data = [
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: '1234',
        isAdmin: true
    }
];
 
class UserSeeder extends Seeder {
  async shouldRun() {
    return User.countDocuments()
      .exec()
      .then(count => count === 0);
  }
 
  async run() {
    return User.create(data);
  }
}
 
export default UserSeeder;