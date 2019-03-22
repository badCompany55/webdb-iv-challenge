exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dir_key")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("dir_key").insert([
        { dir_rec_id: 1, dir_ing_id: 1 },
        { dir_rec_id: 1, dir_ing_id: 2 },
        { dir_rec_id: 1, dir_ing_id: 3 },
        { dir_rec_id: 2, dir_ing_id: 4 },
        { dir_rec_id: 2, dir_ing_id: 5 },
        { dir_rec_id: 2, dir_ing_id: 6 },
        { dir_rec_id: 3, dir_ing_id: 7 },
        { dir_rec_id: 3, dir_ing_id: 8 },
        { dir_rec_id: 3, dir_ing_id: 9 },
        { dir_rec_id: 3, dir_ing_id: 10 }
      ]);
    });
};
