/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("item", (t) => {
    t.increments("id").primary();
    t.string("item_name").notNullable().unique();
    t.string("initials").notNullable();
    t.integer("type_id").notNullable();
    // t.foreign("type_id").references("type.id");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("item");
};
