exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructions", tb => {
    tb.increments();
    tb.integer("ins_rec_id")
      .unsigned()
      .references("id")
      .inTable("recipes");
    tb.string("instructions");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("instructions");
};
