/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("station").del();
  await knex("station").insert([
    {
      address: "愛知県岡崎市板田町字西流石２番地１",
      day_time:
        "月〜金曜日(祝日含む) 午前８時３０分〜午後４時、土曜日(祝日含む) 午前８時３０分〜午前１１時３０分",
      station_name: "中央クリーンセンター",
      type_id: 7,
    },
    {
      address: "愛知県岡崎市板田町字西流石２番地１",
      day_time:
        "月〜金曜日(祝日含む) 午前８時３０分〜午後４時、土曜日(祝日含む) 午前８時３０分〜午前１１時３０分",
      station_name: "中央クリーンセンター",
      type_id: 6,
    },
    {
      address: "愛知県岡崎市板田町字西流石２番地１",
      day_time:
        "月〜金曜日(祝日含む) 午前８時３０分〜午後４時、土曜日(祝日含む) 午前８時３０分〜午前１１時３０分",
      station_name: "中央クリーンセンター",
      type_id: 8,
    },
    {
      address: "愛知県岡崎市板田町字西流石２番地１",
      day_time:
        "月〜金曜日(祝日含む) 午前８時３０分〜午後４時、土曜日(祝日含む) 午前８時３０分〜午前１１時３０分",
      station_name: "中央クリーンセンター",
      type_id: 1,
    },
    {
      address: "愛知県岡崎市八帖町字立島２番地１",
      day_time:
        "月〜金曜日(祝日含む) 午前８時３０分〜午後４時、土曜日(祝日含む) 午前８時３０分〜午前１１時３０分",
      station_name: "八帖クリーンセンター",
      type_id: 7,
    },
    {
      address: "愛知県岡崎市八帖町字立島２番地１",
      day_time:
        "月〜金曜日(祝日含む) 午前８時３０分〜午後４時、土曜日(祝日含む) 午前８時３０分〜午前１１時３０分",
      station_name: "八帖クリーンセンター",
      type_id: 8,
    },
    {
      address: "愛知県岡崎市八帖町字立島２番地１",
      day_time:
        "月〜金曜日(祝日含む) 午前８時３０分〜午後４時、土曜日(祝日含む) 午前８時３０分〜午前１１時３０分",
      station_name: "八帖クリーンセンター",
      type_id: 1,
    },
    {
      address: "愛知県岡崎市八帖町字立島２番地１",
      day_time:
        "月〜金曜日(祝日含む) 午前８時３０分〜午後４時、土曜日(祝日含む) 午前８時３０分〜午前１１時３０分",
      station_name: "八帖クリーンセンター",
      type_id: 0,
    },
    {
      address: "愛知県岡崎市稲熊町字７丁目１７番地１",
      day_time: "毎日(土日・祝日含む) 午前９時〜午後４時",
      station_name: "総合資源ステーション りすた稲熊",
      type_id: 2,
    },
    {
      address: "愛知県岡崎市稲熊町字７丁目１７番地１",
      day_time: "毎日(土日・祝日含む) 午前９時〜午後４時",
      station_name: "総合資源ステーション りすた稲熊",
      type_id: 3,
    },
    {
      address: "愛知県岡崎市稲熊町字７丁目１７番地１",
      day_time: "毎日(土日・祝日含む) 午前９時〜午後４時",
      station_name: "総合資源ステーション りすた稲熊",
      type_id: 4,
    },
    {
      address: "愛知県岡崎市稲熊町字７丁目１７番地１",
      day_time: "毎日(土日・祝日含む) 午前９時〜午後４時",
      station_name: "総合資源ステーション りすた稲熊",
      type_id: 5,
    },
    {
      address: "愛知県岡崎市稲熊町字７丁目１７番地１",
      day_time: "毎日(土日・祝日含む) 午前９時〜午後４時",
      station_name: "総合資源ステーション りすた稲熊",
      type_id: 9,
    },
    {
      address: "愛知県岡崎市稲熊町字７丁目１７番地１",
      day_time: "毎日(土日・祝日含む) 午前９時〜午後４時",
      station_name: "総合資源ステーション りすた稲熊",
      type_id: 11,
    },
    {
      address: "",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "市役所(東立体駐車場、北側駐車場)",
      type_id: 9,
    },
    {
      address: "",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "市役所(東立体駐車場、北側駐車場)",
      type_id: 3,
    },
    {
      address: "",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "市役所(東立体駐車場、北側駐車場)",
      type_id: 11,
    },
    {
      address: "愛知県岡崎市上六名３丁目",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "中央市民センター",
      type_id: 9,
    },
    {
      address: "愛知県岡崎市上六名３丁目",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "中央市民センター",
      type_id: 3,
    },
    {
      address: "愛知県岡崎市上六名３丁目",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "中央市民センター",
      type_id: 11,
    },
    {
      address: "",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "南部乳児保育園",
      type_id: 9,
    },
    {
      address: "",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "南部乳児保育園",
      type_id: 3,
    },
    {
      address: "",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "南部乳児保育園",
      type_id: 11,
    },
    {
      address: "",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "大平市民センター",
      type_id: 9,
    },
    {
      address: "",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "大平市民センター",
      type_id: 3,
    },
    {
      address: "",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "大平市民センター",
      type_id: 11,
    },
    {
      address: "愛知県岡崎市美合町",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "高年者センター岡崎 南駐車場",
      type_id: 9,
    },
    {
      address: "愛知県岡崎市美合町",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "高年者センター岡崎 南駐車場",
      type_id: 3,
    },
    {
      address: "愛知県岡崎市美合町",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "高年者センター岡崎 南駐車場",
      type_id: 11,
    },
    {
      address: "愛知県岡崎市宇頭町",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "矢作市民センター",
      type_id: 9,
    },
    {
      address: "愛知県岡崎市宇頭町",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "矢作市民センター",
      type_id: 3,
    },
    {
      address: "愛知県岡崎市宇頭町",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "矢作市民センター",
      type_id: 11,
    },
    {
      address: "愛知県岡崎市岩津町",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "岩津市民センター",
      type_id: 9,
    },
    {
      address: "愛知県岡崎市岩津町",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "岩津市民センター",
      type_id: 3,
    },
    {
      address: "愛知県岡崎市岩津町",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "岩津市民センター",
      type_id: 11,
    },
    {
      address: "",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "北部地域交流センター なごみん",
      type_id: 9,
    },
    {
      address: "",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "北部地域交流センター なごみん",
      type_id: 3,
    },
    {
      address: "",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "北部地域交流センター なごみん",
      type_id: 11,
    },
    {
      address: "",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "六ツ美市民センター",
      type_id: 9,
    },
    {
      address: "",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "六ツ美市民センター",
      type_id: 3,
    },
    {
      address: "",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "六ツ美市民センター",
      type_id: 11,
    },
    {
      address: "",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "東部市民センター",
      type_id: 9,
    },
    {
      address: "",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "東部市民センター",
      type_id: 3,
    },
    {
      address: "",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "東部市民センター",
      type_id: 11,
    },
    {
      address: "愛知県岡崎市樫山町",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "額田支所",
      type_id: 9,
    },
    {
      address: "愛知県岡崎市樫山町",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "額田支所",
      type_id: 3,
    },
    {
      address: "愛知県岡崎市樫山町",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "額田支所",
      type_id: 11,
    },
    // { address: "", day_time: "", station_name: "", type_id: 3 },
  ]);
};
