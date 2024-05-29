/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("station").del();
  await knex("station").insert([
    { address: "rowValue1", day_time: "", station_name: "", type_id: 1 },
    { address: "rowValue2", day_time: "", station_name: "", type_id: 2 },
    { address: "rowValue3", day_time: "", station_name: "", type_id: 3 },
  ]);
};
