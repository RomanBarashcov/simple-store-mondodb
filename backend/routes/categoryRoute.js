import express from 'express';
import Category from '../models/categoryModel';

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    
    const categories = await Category.find({});
    return res.send(categories);

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

export default router;