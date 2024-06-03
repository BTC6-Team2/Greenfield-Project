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
      latitude: 34.959237,
      longitude:137.225682
    },
    {
      address: "愛知県岡崎市板田町字西流石２番地１",
      day_time:
        "月〜金曜日(祝日含む) 午前８時３０分〜午後４時、土曜日(祝日含む) 午前８時３０分〜午前１１時３０分",
      station_name: "中央クリーンセンター",
      type_id: 6,
      latitude: 34.959237,
      longitude:137.225682
    },
    {
      address: "愛知県岡崎市板田町字西流石２番地１",
      day_time:
        "月〜金曜日(祝日含む) 午前８時３０分〜午後４時、土曜日(祝日含む) 午前８時３０分〜午前１１時３０分",
      station_name: "中央クリーンセンター",
      type_id: 8,
      latitude: 34.959237,
      longitude:137.225682
    },
    {
      address: "愛知県岡崎市板田町字西流石２番地１",
      day_time:
        "月〜金曜日(祝日含む) 午前８時３０分〜午後４時、土曜日(祝日含む) 午前８時３０分〜午前１１時３０分",
      station_name: "中央クリーンセンター",
      type_id: 1,
      latitude: 34.959237,
      longitude:137.225682
    },
    {
      address: "愛知県岡崎市八帖町字立島２番地１",
      day_time:
        "月〜金曜日(祝日含む) 午前８時３０分〜午後４時、土曜日(祝日含む) 午前８時３０分〜午前１１時３０分",
      station_name: "八帖クリーンセンター",
      type_id: 7,
      latitude: 34.949433,
      longitude:137.147866
    },
    {
      address: "愛知県岡崎市八帖町字立島２番地１",
      day_time:
        "月〜金曜日(祝日含む) 午前８時３０分〜午後４時、土曜日(祝日含む) 午前８時３０分〜午前１１時３０分",
      station_name: "八帖クリーンセンター",
      type_id: 8,
      latitude: 34.949433,
      longitude:137.147866
    },
    {
      address: "愛知県岡崎市八帖町字立島２番地１",
      day_time:
        "月〜金曜日(祝日含む) 午前８時３０分〜午後４時、土曜日(祝日含む) 午前８時３０分〜午前１１時３０分",
      station_name: "八帖クリーンセンター",
      type_id: 1,
      latitude: 34.949433,
      longitude:137.147866
    },
    {
      address: "愛知県岡崎市稲熊町字７丁目１７番地１",
      day_time: "毎日(土日・祝日含む) 午前９時〜午後４時",
      station_name: "総合資源ステーション りすた稲熊",
      type_id: 2,
      latitude: 34.964817,
      longitude:137.181291
    },
    {
      address: "愛知県岡崎市稲熊町字７丁目１７番地１",
      day_time: "毎日(土日・祝日含む) 午前９時〜午後４時",
      station_name: "総合資源ステーション りすた稲熊",
      type_id: 3,
      latitude: 34.964817,
      longitude:137.181291
    },
    {
      address: "愛知県岡崎市稲熊町字７丁目１７番地１",
      day_time: "毎日(土日・祝日含む) 午前９時〜午後４時",
      station_name: "総合資源ステーション りすた稲熊",
      type_id: 4,
      latitude: 34.964817,
      longitude:137.181291
    },
    {
      address: "愛知県岡崎市稲熊町字７丁目１７番地１",
      day_time: "毎日(土日・祝日含む) 午前９時〜午後４時",
      station_name: "総合資源ステーション りすた稲熊",
      type_id: 5,
      latitude: 34.964817,
      longitude:137.181291
    },
    {
      address: "愛知県岡崎市稲熊町字７丁目１７番地１",
      day_time: "毎日(土日・祝日含む) 午前９時〜午後４時",
      station_name: "総合資源ステーション りすた稲熊",
      type_id: 9,
      latitude: 34.964817,
      longitude:137.181291
    },
    {
      address: "愛知県岡崎市稲熊町字７丁目１７番地１",
      day_time: "毎日(土日・祝日含む) 午前９時〜午後４時",
      station_name: "総合資源ステーション りすた稲熊",
      type_id: 11,
      latitude: 34.964817,
      longitude:137.181291
    },
    {
      address: "愛知岡崎市十王町二丁目9番地",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "市役所(東立体駐車場、北側駐車場)",
      type_id: 9,
      latitude: 34.954608,
      longitude:137.172967
    },
    {
      address: "愛知岡崎市十王町二丁目9番地",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "市役所(東立体駐車場、北側駐車場)",
      type_id: 3,
      latitude: 34.954608,
      longitude:137.172967
    },
    {
      address: "愛知岡崎市十王町二丁目9番地",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "市役所(東立体駐車場、北側駐車場)",
      type_id: 11,
      latitude: 34.954608,
      longitude:137.172967
    },
    {
      address: "愛知県岡崎市上六名3丁目7番地",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "中央市民センター",
      type_id: 9,
      latitude: 34.94554,
      longitude:137.158774
    },
    {
      address: "愛知県岡崎市上六名3丁目7番地",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "中央市民センター",
      type_id: 3,
      latitude: 34.94554,
      longitude:137.158774
    },
    {
      address: "愛知県岡崎市上六名3丁目7番地",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "中央市民センター",
      type_id: 11,
      latitude: 34.94554,
      longitude:137.158774
    },
    {
      address: "愛知県岡崎市羽根西新町5丁目3番地",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "南部乳児保育園",
      type_id: 9,
      latitude: 34.926732,
      longitude:137.155132
    },
    {
      address: "愛知県岡崎市羽根西新町5丁目3番地",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "南部乳児保育園",
      type_id: 3,
      latitude: 34.926732,
      longitude:137.155132
    },
    {
      address: "愛知県岡崎市羽根西新町5丁目3番地",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "南部乳児保育園",
      type_id: 11,
      latitude: 34.926732,
      longitude:137.155132
    },
    {
      address: "愛知県岡崎市大平町皿田６",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "大平市民センター",
      type_id: 9,
      latitude: 34.938311,
      longitude:137.200414
    },
    {
      address: "愛知県岡崎市大平町皿田６",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "大平市民センター",
      type_id: 3,
      latitude: 34.938311,
      longitude:137.200414
    },
    {
      address: "愛知県岡崎市大平町皿田６",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "大平市民センター",
      type_id: 11,
      latitude: 34.938311,
      longitude:137.200414
    },
    {
      address: "愛知県岡崎市美合町下長根２−１",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "高年者センター岡崎 南駐車場",
      type_id: 9,
      latitude: 34.921419,
      longitude:137.184279
    },
    {
      address: "愛知県岡崎市美合町下長根２−１",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "高年者センター岡崎 南駐車場",
      type_id: 3,
      latitude: 34.921419,
      longitude:137.184279
    },
    {
      address: "愛知県岡崎市美合町下長根２−１",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "高年者センター岡崎 南駐車場",
      type_id: 11,
      latitude: 34.921419,
      longitude:137.184279
    },
    {
      address: "愛知県岡崎市宇頭町小薮８０−１",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "矢作市民センター",
      type_id: 9,
      latitude: 34.967646,
      longitude:137.129096
    },
    {
      address: "愛知県岡崎市宇頭町小薮８０−１",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "矢作市民センター",
      type_id: 3,
      latitude: 34.967646,
      longitude:137.129096
    },
    {
      address: "愛知県岡崎市宇頭町小薮８０−１",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "矢作市民センター",
      type_id: 11,
      latitude: 34.967646,
      longitude:137.129096
    },
    {
      address: "愛知県岡崎市岩津町檀ノ上２６−２",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "岩津市民センター",
      type_id: 9,
      latitude: 35.005543,
      longitude:137.167863
    },
    {
      address: "愛知県岡崎市岩津町檀ノ上２６−２",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "岩津市民センター",
      type_id: 3,
      latitude: 35.005543,
      longitude:137.167863
    },
    {
      address: "愛知県岡崎市岩津町檀ノ上２６−２",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "岩津市民センター",
      type_id: 11,
      latitude: 35.005543,
      longitude:137.167863
    },
    {
      address: "愛知県岡崎市西蔵前町季平４５−１",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "北部地域交流センター なごみん",
      type_id: 9,
      latitude: 34.999852,
      longitude:137.170093
    },
    {
      address: "愛知県岡崎市西蔵前町季平４５−１",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "北部地域交流センター なごみん",
      type_id: 3,
      latitude: 34.999852,
      longitude:137.170093
    },
    {
      address: "愛知県岡崎市西蔵前町季平４５−１",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "北部地域交流センター なごみん",
      type_id: 11,
      latitude: 34.999852,
      longitude:137.170093
    },
    {
      address: "愛知県岡崎市下青野町天神６４",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "六ツ美市民センター",
      type_id: 9,
      latitude: 34.913185,
      longitude:137.126875
    },
    {
      address: "愛知県岡崎市下青野町天神６４",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "六ツ美市民センター",
      type_id: 3,
      latitude: 34.913185,
      longitude:137.126875
    },
    {
      address: "愛知県岡崎市下青野町天神６４",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "六ツ美市民センター",
      type_id: 11,
      latitude: 34.913185,
      longitude:137.126875
    },
    {
      address: "愛知県岡崎市山綱町天神２−９",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "東部市民センター",
      type_id: 9,
      latitude: 34.897381,
      longitude:137.242274
    },
    {
      address: "愛知県岡崎市山綱町天神２−９",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "東部市民センター",
      type_id: 3,
      latitude: 34.897381,
      longitude:137.242274
    },
    {
      address: "愛知県岡崎市山綱町天神２−９",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "東部市民センター",
      type_id: 11,
      latitude: 34.897381,
      longitude:137.242274
    },
    {
      address: "愛知県岡崎市樫山町山ノ神２１−１",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "額田支所",
      type_id: 9,
      latitude: 34.91964,
      longitude:137.292072
    },
    {
      address: "愛知県岡崎市樫山町山ノ神２１−１",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "額田支所",
      type_id: 3,
      latitude: 34.91964,
      longitude:137.292072
    },
    {
      address: "愛知県岡崎市樫山町山ノ神２１−１",
      day_time:
        "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
      station_name: "額田支所",
      type_id: 11,
      latitude: 34.91964,
      longitude:137.292072
    },
    // { address: "", day_time: "", station_name: "", type_id: 3 },
  ]);
};
