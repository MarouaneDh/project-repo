const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");
const controllers = require("../controllers/recipe.controllers");

// test routing
router.get("/hellorecipes", (req, res) => {
  res.send("routing recipes OK");
});

//post recipe
//get all recipes
//get recipe by id
//delete recipe
//update recipe

//POST
//recipe posting
//PATH: http://localhost:5000/api/recipe/
//params Body
router.post("/", controllers.postRecipe);

//GET
//getting all recipes
//PATH: http://localhost:5000/api/recipe/
router.get("/", controllers.getAllRecipes);

//GET
//getting recipe by id
//PATH: http://localhost:5000/api/recipe/:id
//params id
router.get("/:id", controllers.getRecipe);

//DELETE
//deleting a recipe by id
//PATH: http://localhost:5000/api/recipe/:id
//params id
router.delete("/:id", controllers.deleteRecipe);

//PUT
//updating a recipe by id
//PATH: http://localhost:5000/api/recipe/:id
//params id body
router.put("/:id", controllers.putRecipe);

module.exports = router;
