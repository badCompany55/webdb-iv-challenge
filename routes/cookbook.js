const express = require("express");
const db = require("../data/actions.js");

const router = express.Router();

router.get("/dishes", async (req, res) => {
  try {
    const dishes = await db.all_dishes();
    res.status(200).json(dishes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dishes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const dish = await db.a_dish(id);
    dish.length > 0
      ? res.status(200).json(dish)
      : res.status(400).json({ Error: "Invalid dish" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/recipes", async (req, res) => {
  try {
    const recipes = await db.all_recipes();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
