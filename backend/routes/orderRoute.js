import express from 'express';
import { isAuth, isAdmin } from '../util';
import orderRepository from '../repository/orderRepository';

const router = express.Router();

const repositories = { orderRepository }
const orderService = require('../services/orderService')(repositories);
const orderManager = require('../managers/orderManager')(repositories);
const paymentManager = require('../managers/paymentManager')(repositories);

router.get("/", isAuth, async (req, res) => {
  try {

    const orders = await orderService.getAllOrders();
    return res.send(orders);
    
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.get("/mine", isAuth, async (req, res) => {
  try {
    
    if(!req.user._id) throw "Incorrect data payload!";

    const userId = req.user._id;
    const orders = await orderService.getUserOrders(userId);
    
    return res.send(orders);

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.get("/:id", isAuth, async (req, res) => {
try {

    if(!req.params.id) throw "Incorrect data payload!";

    const orderId = req.params.id;
    const order = await orderService.getOrderById(orderId);

    return res.send(order);

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
try {

    if(!req.params.id) throw "Incorrect data payload!";

    const orderId = req.params.id;

    const deletedOrder = await deleteOrder(orderId)
    return res.send(deletedOrder);

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.post("/", isAuth, async (req, res) => {
  try {

    const newOrder = {
      orderItems: req.body.orderItems,
      user: req.user._id,
      shipping: req.body.shipping,
      payment: req.body.payment,
      itemsPrice: req.body.itemsPrice,
      taxPrice: req.body.taxPrice,
      shippingPrice: req.body.shippingPrice,
      totalPrice: req.body.totalPrice,
    };

    const newOrderCreated = await orderManager.makeOrder(newOrder);
    return res.status(201).send({ message: "New Order Created", data: newOrderCreated });

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.put("/:id/pay", isAuth, async (req, res) => {
try {

    if(!req.params.id ||
      !req.body.payerID ||
      !req.body.orderID) throw "Incorrect data payload!";
    
    const orderId = req.params.id;
    const paymentData = {
      payerID: req.body.payerID,
      orderID: req.body.orderID,
      paymentID: req.body.paymentID
    }
  
  const updatedOrder = paymentManager.makePayment(orderId, paymentData);
  return res.send({ message: 'Order Paid.', order: updatedOrder });


  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

export default router;