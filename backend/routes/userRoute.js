import express from 'express';
import { isAuth } from '../util';
import userRepository from '../repository/userRepository';

const repositories = { userRepository };
const authManager = require('../managers/authManager')(repositories);
const userService = require('../services/userService')(repositories);

const router = express.Router();

router.put('/:id', isAuth, async (req, res) => {
  try {

    if(!req.params.id ||
      !req.body.name ||
      !req.body.email || 
      !req.body.password) throw "Data are incorrect";

    const userId = req.params.id;
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }

    const data = await userService.updateUser(userId, user);
    console.log(data)
    return res.send({ ...data });

  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
});

router.post('/signin', async (req, res) => {
  try {

    if(!req.body.email || 
      !req.body.password) throw "Data are incorrect";

     const data = await authManager.signIn(req.body.email, req.body.password);
     return res.send({ ...data });

  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
});

router.post('/register', async (req, res) => {
  try {

    if(!req.body.name || 
      !req.body.email || 
      !req.body.password) throw "Data are incorrect";

    const data = await authManager.register(req.body.name, req.body.email, req.body.password);
    return res.send({ ...data });

  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
})

export default router;