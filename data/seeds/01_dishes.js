exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        { dish_name: "zachs best tacos", dis_rec_id: 1 },
        { dish_name: "zach best tacos", dis_rec_id: 2 },
        { dish_name: "the chimi", dis_rec_id: 3 }
      ]);
    });
};
