import express from 'express';
import categoryRepository from '../repository/categoryRepository';

const router = express.Router();

const repositories = { categoryRepository };
const categoryService = require('../services/categoryService')(repositories);

router.get("/", async (req, res) => {
  try {
    
    const categories = await categoryService.getAllCategories();
    return res.send(categories);

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

export default router;