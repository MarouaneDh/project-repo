const { json } = require("express");
const mongoose = require("mongoose");

const schema = mongoose.Schema;

const ingredientSchema = new schema({
  recipeId: {
    type: String,
    required: true,
  },
  ingredientName: {
    type: String,
    required: true,
  },
  ingredientValue: {
    type: Number,
    required: true,
  },
  ingredientUnity: {
    type: String,
    required: true,
  },
});

const recipeSchema = new schema({
  recipeName: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  cookingTime: {
    type: Number,
    required: true,
  },
  steps: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      ingredientName: {
        type: String,
      },
      ingredientValue: {
        type: Number,
      },
      ingredientUnity: {
        type: String,
      },
    },
  ],
  likes: {
    type: Number,
  },
  comments: {
    type: Array,
  },
});

module.exports = Recipe = mongoose.model("recipe", recipeSchema);
