exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", tb => {
    tb.increments();
    tb.integer("dis_rec_id")
      .unsigned()
      .references("id")
      .inTable("recipes");
    tb.string("dish_name", 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};
