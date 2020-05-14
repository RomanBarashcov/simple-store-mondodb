import express from 'express';
import Product from '../models/productModel';
import { isAuth, isAdmin } from '../util';
import { upload } from '../utils/uploader';
import fs from 'fs';

const router = express.Router();

router.get("/", async (req, res) => {
  try {

    const category = req.query.category ? { category: req.query.category } : {};

    const searchKeyword = req.query.searchKeyword ? {
      title: {
        $regex: req.query.searchKeyword,
        $options: 'i'
      }
    } : {};

    const sortOrder = req.query.sortOrder ?
      (req.query.sortOrder === 'lowest' ? { price: 1 } : { price: -1 })
      :
      { _id: -1 };

    let products = await Product.find({ ...category, ...searchKeyword }).sort(sortOrder);
    return res.send(products);

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    
      const product = await Product.findOne({ _id: req.params.id }).populate("comments.user");
      if (product) {

        return res.send(product);

      } else {

        return res.status(404).send({ message: "Product Not Found." });

      }

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.put("/:id", isAuth, isAdmin, async (req, res) => {
  try {

      const productId = req.params.id;
      const product = await Product.findById(productId);

      if (product) {

        product.title = req.body.title;
        product.price = req.body.price;
        product.category = req.body.category;
        product.countInStock = req.body.countInStock;
        product.description = req.body.description;

        const updatedProduct = await product.save();
        if (updatedProduct) {
          return res.status(200).send({ message: 'Product Updated', data: updatedProduct });
        }

      }

      return res.status(500).send({ message: ' Error in Updating Product.' });
      
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  try {

    const deletedProduct = await Product.findById(req.params.id);
    if (deletedProduct) {

      await deletedProduct.remove();
      return res.send({ message: "Product Deleted" });

    } else {
      return res.send("Error in Deletion.");
    }

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});


router.post("/", isAuth, isAdmin, async (req, res) => {
try {

    const product = new Product({

      title: req.body.title,
      price: req.body.price,
      category: req.body.category,
      countInStock: req.body.countInStock,
      description: req.body.description,
      rating: req.body.rating,
      numReviews: req.body.numReviews,

    });

    const newProduct = await product.save();
    if (newProduct) {
      return res.status(201).send({ message: 'New Product Created', data: newProduct });
    }
    
    return res.status(500).send({ message: ' Error in Creating Product.' });

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.post("/:id/image", upload.single("myImage"), async (req, res, next) => {
  try {

    const path = req.file.path;

    const product = await Product.findById(req.params.id);
    if(!product) return res.status(500).send({ message: 'Error in UpdateImage.' });

    if(product.image) {
          //remove old image from folder by path
        fs.unlinkSync(req.file.path.slice(0,15) + product.image);
    }

    // save new image
    product.image = path.slice(15);
    const updatedProduct = await product.save();

    if (updatedProduct) {
      return res.status(200).send({ message: 'Product Updated', data: updatedProduct });
    }

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});


export default router;