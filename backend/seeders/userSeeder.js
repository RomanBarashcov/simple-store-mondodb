import { Seeder } from 'mongoose-data-seed';
import User from '../models/userModel';
 
const data = [
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: '1234',
        isAdmin: true
    }, {
        name: 'Alex',
        email: 'alex@gmail.com',
        password: '1234',
        isAdmin: false
    }, {
        name: 'Tim',
        email: 'tim@gmail.com',
        password: '1234',
        isAdmin: false
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