const User = require("../models/userModel");
const Category = require("../models/CategoryModel");
const ProductType = require("../models/productTypeModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const createCategory = asyncHandler(async (req, res) => {
  const { id } = req.user;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const category = await Category.create(req.body);
    res.status(200).json(category);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllCategories = asyncHandler(async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCategory,
  getAllCategories,
};
