exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ing_name: "salsa", ing_rec_id: 1, amout: 2 },
        { ing_name: "taco shells", ing_rec_id: 1, amout: 1.5 },
        { ing_name: "tomatos", ing_rec_id: 1, amout: 3 },
        { ing_name: "steak", ing_rec_id: 2, amout: 10 },
        { ing_name: "green beans", ing_rec_id: 2, amout: 2.3 },
        { ing_name: "flour tortias", ing_rec_id: 2, amout: 5 },
        { ing_name: "flour tortias", ing_rec_id: 3, amout: 2 },
        { ing_name: "shredded chicked", ing_rec_id: 3, amout: 15.5 },
        { ing_name: "beans", ing_rec_id: 3, amout: 1 },
        { ing_name: "rice", ing_rec_id: 3, amout: 3 }
      ]);
    });
};
