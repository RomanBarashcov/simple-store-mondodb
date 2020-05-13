import { Seeder } from 'mongoose-data-seed';
import Product from '../models/productModel';
import Category from '../models/categoryModel';
import User from '../models/userModel';

const data = [{
  title: "Nike Air Zoom Pegasus 37",
  image:"/images/c3_im1.jpg",
  price: 120,
  category: 1,
  countInStock: 10,
  description: "Reinvigorate your stride with the Nike Air Zoom Pegasus 37. Delivering the same fit and feel that runners love, the shoe has an all-new forefoot cushioning unit and foam for maximum responsiveness. The result is a durable, lightweight trainer designed for everyday running.",
  rating: 5,
  numReviews: 0,
  comments: []
}, {
  title: "Nike React Phantom Run Flyknit 2",
  image:"/images/c3_im2.jpg",
  price: 140,
  category: 1,
  countInStock: 25,
  description: "The Nike React Phantom Run Flyknit 2 offers versatility for the everyday runner. Building on the foundation of its predecessor, the shoe expands on its laceless design by adding secure support that feels like it disappears on your foot. More foam means better cushioning, keeping you comfortable as you run.",
  rating: 5,
  numReviews: 0,
  comments: []
},{
  title: "Nike React Infinity Run Flyknit",
  image:"/images/c3_im3.jpg",
  price: 160,
  category: 1,
  countInStock: 100,
  description: "The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel. Lace up and feel the potential as you hit the road.",
  rating: 5,
  numReviews: 0,
  comments: []
}];
 
class ProductSeeder extends Seeder {
  async shouldRun() {
    return Product.countDocuments()
      .exec()
      .then(count => count === 0);
  }
 
  async run() {

    let runningCategory = await Category.findOne({name: "Running"});
    let users = await User.find({});

    let comments = [{
      text: "Good shoes",
      rating: 5,
      user: users[0]._id
    }, {
      text: "Great shoes",
      rating: 5,
      user: users[1]._id
    },{
      text: "Excelent shoes",
      rating: 5,
      user: users[2]._id
    }];

    data.forEach(i => {
      i.category = runningCategory;
      i.comments = comments;
    })

    return Product.create(data);
    
  }
}
 
export default ProductSeeder;