import express from 'express';
import { isAuth, isAdmin } from '../util';
import { upload } from '../utils/uploader';
import productRepository from '../repository/productRepository';

const router = express.Router();

const repositories = { productRepository };
const productService = require('../services/productService')(repositories);

router.get("/", async (req, res) => {
  try {

    const products = await productService.getAllProducts(req.query.category, req.query.searchKeyword, req.query.sortOrder)
    return res.send(products);

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    
    if(!req.params.id) throw "Incorrect Data payload!";

    const productId = req.params.id;
    const product = await productService.getProductById(productId);
    
    return res.send(product);

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.put("/:id", isAuth, isAdmin, async (req, res) => {
  try {

    if(!req.params.id) throw "Incorrect Data payload!";

    const productId = req.params.id;
    const updatedProduct = await productService.updateProduct(productId, { ...req.body });
    return res.status(200).send({ message: 'Product Updated', data: updatedProduct });
      
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  try {
    
    if(!req.params.id) throw "Incorrect Data payload!";

    const productId = req.params.id;
    const deletedProductResult = await productService.removeProduct(productId)
    return res.status(200).send({ message: 'Product Deleted', data: deletedProductResult });

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});


router.post("/", isAuth, isAdmin, async (req, res) => {
try {

    const newProduct = await productService.addProduct({...req.body})
    return res.status(201).send({ message: 'New Product Created', data: newProduct });
    
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.post("/:id/image", upload.single("myImage"), async (req, res, next) => {
  try {

    if(!req.file.path || 
      !req.params.id) throw "Incorrect Data payload!";

    const path = req.file.path;
    const productId = req.params.id;
    
    const updatedProduct = await productService.assignImageToProduct(productId, path);
    return res.status(200).send({ message: 'Product Updated', data: updatedProduct });

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});


export default router;