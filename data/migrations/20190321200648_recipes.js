exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", tb => {
    tb.increments();
    tb.string("rec_name", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
