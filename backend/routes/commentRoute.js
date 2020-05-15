import express from 'express';
import Product from '../models/productModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.post("/delete", isAuth, isAdmin, async (req, res) => {
  try {

    const productId = req.body.productId;
    const commentId = req.body.commentId;

    let updateResult = await Product.updateOne({ _id: productId }, { 
      $pull: { 
        'comments': { _id: commentId } 
      } 
    });

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

      const comment = req.body;

      let product = await Product.findById(req.params.productId)
      if(!product) return res.send("Error in add new comment.");

      // cal reviews and rating
      const numReviews = product.comments.length + 1;
      const rating = (product.comments.reduce((acc, com) => acc + com.rating, 0) + comment.rating) / numReviews;

      let updateResult = await Product.updateOne({ _id: req.params.productId }, {
          numReviews: numReviews,
          rating: rating,
          $push: { 
              comments: { 
                  rating: comment.rating, 
                  text: comment.text,
                  user: comment.user 
                } 
            } 
        });

      if (updateResult) {
        return res.status(200).send({ message: 'Product Updated', data: updateResult });
      }
  
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err });
    }
  });

  router.put("/:productId", isAuth, async (req, res) => {
    try {
  
      const comment = req.body.comment;
      
      const product = await Product.findById(req.params.productId)
      if(!product) return res.send("Error in update comment.");
  
      let updateResult = await Product.updateOne({ 'comments._id' : comment._id }, { 
          '$set': { 
                'comments.$.raiting': comment.raiting,
                'comments.$.text': comment.text
            }
        });

      if (updateResult) {
        return res.status(200).send({ message: 'Product Updated', data: updateResult });
      }
  
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err });
    }
  });

  export default router;