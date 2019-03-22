exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { rec_name: "spicy tacos" },
        { rec_name: "normal tacos" },
        { rec_name: "chimichanga" }
      ]);
    });
};
