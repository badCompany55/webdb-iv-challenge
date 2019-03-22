exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", tb => {
    tb.increments();
    tb.integer("ing_rec_id")
      .unsigned()
      .references("id")
      .inTable("recipes");
    tb.string("ing_name", 128).notNullable();
    tb.float("amout").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients");
};
