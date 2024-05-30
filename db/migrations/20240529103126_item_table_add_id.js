/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .alterTable("item", (t) => {
      t.dropForeign("type_id");
    })
    .alterTable("station", (t) => {
      t.dropForeign("type_id");
    })
    .alterTable("type", (t) => {
      t.dropColumn("id");
    })
    .alterTable("type", (t) => {
      t.integer("id").primary();
    })
    .alterTable("item", (t) => {
      t.foreign("type_id").references("type.id");
    })
    .alterTable("station", (t) => {
      t.foreign("type_id").references("type.id");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .alterTable("item", (t) => {
      t.dropForeign("type_id");
    })
    .alterTable("station", (t) => {
      t.dropForeign("type_id");
    })
    .alterTable("type", (t) => {
      t.dropColumn("id");
    })
    .alterTable("type", (t) => {
      t.increments("id").primary();
    })
    .alterTable("item", (t) => {
      t.foreign("type_id").references("type.id");
    })
    .alterTable("station", (t) => {
      t.foreign("type_id").references("type.id");
    });
};
