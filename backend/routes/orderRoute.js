import express from 'express';
import Order from '../models/orderModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get("/", isAuth, async (req, res) => {
  try {

    const orders = await Order.find({}).populate('user');
    return res.send(orders);
    
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.get("/mine", isAuth, async (req, res) => {
  try {
    
    const orders = await Order.find({ user: req.user._id });
    return res.send(orders);

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.get("/:id", isAuth, async (req, res) => {
try {

    const order = await Order.findOne({ _id: req.params.id });

    if (order) {
      return res.send(order);
    } else {
      return res.status(404).send("Order Not Found.")
    }

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
try {

  const order = await Order.findOne({ _id: req.params.id });

    if (order) {
      
      const deletedOrder = await order.remove();
      return res.send(deletedOrder);

    } else {
      return res.status(404).send("Order Not Found.")
    }

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.post("/", isAuth, async (req, res) => {
  try {

    const newOrder = new Order({
      orderItems: req.body.orderItems,
      user: req.user._id,
      shipping: req.body.shipping,
      payment: req.body.payment,
      itemsPrice: req.body.itemsPrice,
      taxPrice: req.body.taxPrice,
      shippingPrice: req.body.shippingPrice,
      totalPrice: req.body.totalPrice,
    });

    const newOrderCreated = await newOrder.save();
    return res.status(201).send({ message: "New Order Created", data: newOrderCreated });

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.put("/:id/pay", isAuth, async (req, res) => {
try {

    const order = await Order.findById(req.params.id);
    console.log(order);
    if (order) {

      order.isPaid = true;
      order.paidAt = Date.now();
      order.payment = {
        paymentMethod: 'paypal',
        paymentResult: {
          payerID: req.body.payerID,
          orderID: req.body.orderID,
          paymentID: req.body.paymentID
        }
      }

      const updatedOrder = await order.save();
      res.send({ message: 'Order Paid.', order: updatedOrder });

    } else {
      res.status(404).send({ message: 'Order not found.' })
    }

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

export default router;