import express from 'express';
import Category from '../models/categoryModel';

const router = express.Router();

router.get("/", async (req, res) => {

  const categories = await Category.find({});
  res.send(categories);

});

export default router;