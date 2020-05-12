import { Seeder } from 'mongoose-data-seed';
import Category from '../models/categoryModel';
 
const data = [{ name: 'Lifestyle' },
{ name: 'Jordan' },
{ name: 'Running' },
{ name: 'Basketball' },
{ name: 'Football' },
{ name: 'Soccer' },
{ name: 'Training & Gym' },
{ name: 'Skateboarding' },
{ name: 'Baseball' },
{ name: 'Golf' },
{ name: 'Tennis' },
{ name: 'Track & Field' },
{ name: 'Walking' },
];


class CategorySeeder extends Seeder {
  async shouldRun() {
    return Category.countDocuments()
      .exec()
      .then(count => count === 0);
  }
 
  async run() {
    return Category.create(data);
  }
}
 
export default CategorySeeder;