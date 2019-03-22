const db = require("./knex.js");

module.exports = {
  all_dishes,
  a_dish,
  all_recipes
};

function all_dishes() {
  return db("dishes");
}

function a_dish(id) {
  return db("dishes").where("id", id);
}

function all_recipes() {
  return db("dishes")
    .select("rec_name", "dish_name")
    .innerJoin("recipes", "dis_rec_id", "recipes.id");
}
