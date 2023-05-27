import { reviewModel } from "../models/product.model";

const addReview = async (req, res) => {
  try {
    const newReview = new reviewModel({
      productId: req.body.productId,
      rating: req.body.rating,
      reviewText: req.body.reviewText,
      user: req.body.user,
    });
    newReview.save((err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(result);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addReview };
