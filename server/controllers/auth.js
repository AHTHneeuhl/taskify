import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import otpGenerator from "otp-generator";
import nodemailer from "nodemailer";

import User from "../models/User.js";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  port: 465,
  host: "smtp.gmail.com",
});

export const signUp = async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(422).send({ message: "Email is missing" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .send({ message: "User already exists with this email" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });

    newUser
      .save()
      .then((user) => {
        const token = jwt.sign({ id: user._id }, process.env.JWT, {
          expiresIn: "7d",
        });
        res.status(200).json({ token, user });
      })
      .catch((e) => {
        next(e);
      });
  } catch (e) {
    next(e);
  }
};

export const signIn = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return next(createError(201, "User not found"));
    }

    if (user.googleSignedIn) {
      return next(
        createError(
          201,
          "Entered email is Signed Up with google account. Please SignIn with google."
        )
      );
    }

    const validPassword = bcrypt.compareSync(req.body.password, user.password);

    if (!validPassword) {
      return next(createError(201, "Wrong password"));
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT, {
      expiresIn: "7d",
    });

    res.status(200).json({ token, user });
  } catch (err) {
    next(err);
  }
};

export const signInWithGoogle = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      try {
        const user = new User({ ...req.body, googleSignIn: true });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT, {
          expiresIn: "7d",
        });

        res.status(200).json({ token, user: user });
      } catch (err) {
        next(err);
      }
    } else if (user.googleSignedIn) {
      const token = jwt.sign({ id: user._id }, process.env.JWT, {
        expiresIn: "7d",
      });
      res.status(200).json({ token, user });
    } else if (user.googleSignIn === false) {
      return next(createError(201, "User already exists with this email"));
    }
  } catch (err) {
    next(err);
  }
};
