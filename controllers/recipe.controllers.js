const { Mongoose } = require("mongoose");
const ingredient = require("../models/ingredient");
const Recipe = require("../models/Recipe");

exports.postRecipe = async (req, res) => {
  try {
    // const newRecipe = new Recipe(req.body);
    recipe = new Recipe(req.body);
    if (!req.body.recipeName) {
      res.status(400).send({ message: "the recipe's name is required" });
      return;
    }
    if (!req.body.cookingTime) {
      res.status(400).send({ message: "the cooking time is required" });
      return;
    }
    if (!req.body.ingredients) {
      res.status(400).send({ message: "at least one ingredient is required" });
      return;
    }
    if (!req.body.category) {
      res.status(400).send({ message: "the category is required" });
      return;
    }
    // const ingredient = {
    //   ingredientName: req.body.ingredientName,
    //   ingredientValue: req.body.ingredientValue,
    //   ingredientUnity: req.body.ingredientUnity,
    // };

    // const response = await newRecipe.save();
    recipe.save().then(() => res.send({ message: "saved successfully" }));
    // res.send({ response: response, message: "recipe was saved" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "not able to save recipe" });
  }
};

exports.getAllRecipes = async (req, res) => {
  try {
    const result = await Recipe.find();
    res.send({ response: result, message: "got recipes with success" });
  } catch (error) {
    res.status(400).send({ message: "can't get recipes" });
  }
};

exports.getRecipe = async (req, res) => {
  try {
    const result = await Recipe.findOne({
      _id: req.params.id,
    }).populate("ingredients");
    res.send({ response: result, message: "got recipe with success" });
  } catch (error) {
    res.status(400).send({ message: "there is no recipe with this id" });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const result = await Recipe.deleteOne({ _id: req.params.id });
    result.n
      ? res.send({ response: "recipe was deleted" })
      : res.send("there is no recipe with this id");
    res.send("deleted");
  } catch (error) {
    res.send("recipe wasn't deleted");
  }
};

exports.putRecipe = async (req, res) => {
  try {
    const result = await Recipe.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    console.log(result);
    result.nModified
      ? res.send({ message: "recipe updated successfully" })
      : res.send({ message: "the recipe has already been given this update" });
  } catch (error) {
    res
      .status(400)
      .send({ message: "there is no recipe with this id to be updated" });
  }
};

// exports.postRecipe("/recipe", (req, res) => {
//   recipe = new Recipe(req.body);
//   recipe.save().then((res) => res.send({ message: "saved successfully" }));
// });
