exports.up = function(knex, Promise) {
  return knex.schema.createTable("dir_key", tb => {
    tb.integer("dir_rec_id")
      .unsigned()
      .references("id")
      .inTable("recipes");
    tb.integer("dir_ing_id")
      .unsigned()
      .references("id")
      .inTable("ingredients");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dir_key");
};
