/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("type").del();
  await knex("type").insert([
    { id: 1, type_name: "発火性危険ゴミ・有害ゴミ" }, //1
    { id: 2, type_name: "空き缶・空きびん" }, //2
    { id: 3, type_name: "ペットボトル" }, //3
    { id: 4, type_name: "紙類" }, //4
    { id: 5, type_name: "プラスチック類" }, //5
    { id: 6, type_name: "不燃ゴミ" }, //6
    { id: 7, type_name: "可燃ゴミ" }, //7
    { id: 8, type_name: "粗大ゴミ" }, //8
    { id: 9, type_name: "新聞・雑誌・ダンボール・牛乳パック・古着・小型家電" }, //9
    { id: 10, type_name: "古紙類・白色トレイ・ペットボトルなど" }, //10
    { id: 11, type_name: "蛍光管・電池類" }, //11
    { id: 12, type_name: "家電４品目" }, //12
    { id: 13, type_name: "パソコン" }, //13
    { id: 14, type_name: "処理困難物" }, //14
  ]);
};
