import express from 'express';
import { isAuth, isAdmin } from '../util';
import productRepository from '../repository/productRepository';

const router = express.Router();

const repositories = { productRepository };
const commentService = require('../services/commentService')(repositories);

router.post("/delete", isAuth, isAdmin, async (req, res) => {
  try {

    if(!req.body.productId || !req.body.commentId) throw "Incorrect data payload!";

    const productId = req.body.productId;
    const commentId = req.body.commentId;

    const updateResult = await commentService.deleteComment(productId, commentId)
    if (updateResult) {
      return res.status(200).send({ message: 'Product Updated', data: updateResult });
    }

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.post("/:productId", isAuth, async (req, res) => {
    try {

      const productId = req.params.productId;
      const comment = req.body;

      const updateResult = await commentService.addCommentToProduct(productId, comment);
      if (updateResult) {
        return res.status(200).send({ message: 'Product Updated', data: updateResult });
      }
  
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err });
    }
  });

  router.put("/:productId", isAuth, isAdmin, async (req, res) => {
    try {
  
      if(!req.params.productId 
        || !req.body.comment
        || !req.body.comment.rating
        || !req.body.comment.text) throw "Incorrect data payload!";

      const productId = req.params.productId;
      const comment = req.body.comment;
      
      const updateResult = await commentService.updateComment(productId, comment)
      if (updateResult) {
        return res.status(200).send({ message: 'Product Updated', data: updateResult });
      }
  
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err });
    }
  });

  export default router;