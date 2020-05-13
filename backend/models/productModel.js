import mongoose from 'mongoose';

const commetnItemSchema = new mongoose.Schema({
  text: { type: String, required: true },
  rating: { type: Number, default: 0, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
});

const prodctSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: false },
  price: { type: Number, default: 0, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  countInStock: { type: Number, default: 0, required: true },
  description: { type: String, required: true },
  rating: { type: Number, default: 0, required: true },
  numReviews: { type: Number, default: 0, required: true },
  comments: [commetnItemSchema]
});

const productModel = mongoose.model("Product", prodctSchema);
export default productModel;