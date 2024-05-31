/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("station", (t) => {
      t.increments("id").primary();
      t.string("address").notNullable();
      t.string("day_time").notNullable();
      t.string("station_name").notNullable();
      t.integer("type_id").notNullable();
      t.foreign("type_id").references("type.id");
      t.decimal("latitude",9,6);
      t.decimal("longitude",9,6);
    })
    .alterTable("item", (t) => {
      t.foreign("type_id").references("type.id");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("station").alterTable("item", (t) => {
    t.dropForeign("type_id");
  });
};
