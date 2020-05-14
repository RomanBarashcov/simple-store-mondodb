import express from 'express';
import User from '../models/userModel';
import { getToken, isAuth } from '../util';

const router = express.Router();

router.put('/:id', isAuth, async (req, res) => {
  try {

    const userId = req.params.id;
    const user = await User.findById(userId);

    if (user) {

      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      const updatedUser = await user.save();

      return res.send({
        _id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: getToken(updatedUser)
      });

    } else {
      return res.status(404).send({ msg: 'User Not Found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.post('/signin', async (req, res) => {
  try {

      const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
      });

      if (signinUser) {

        res.send({
          _id: signinUser.id,
          name: signinUser.name,
          email: signinUser.email,
          isAdmin: signinUser.isAdmin,
          token: getToken(signinUser)
        });

      } else {
        return res.status(401).send({ msg: 'Invalid Email or Password.' });
      }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

router.post('/register', async (req, res) => {
  try {

    const createdUser = await User.findOne({
      email: req.body.email
    });

    if(createdUser){
      return res.status(401).send({ msg: 'An account with this email already exists!' });
    }

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    const newUser = await user.save();

    if (newUser) {

      return res.send({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        token: getToken(newUser)
      })

    } else {
      return res.status(401).send({ msg: 'Invalid User Data.' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
})

export default router;