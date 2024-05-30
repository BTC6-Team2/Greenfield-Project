const express = require("express");
const app = express();
const cors = require("cors");

const config = require("./knexfile");
const environment = process.env.DATABASE_URL ? "production" : "development";
const knex = require("knex")(config[environment]);

// module.exports = knex(config[environment]);

const setupServer = () => {
  app.use(cors());
  app.use(express.json());
  app.use("/", express.static(__dirname + "/frontend"));

  app.get("/api/items", async (req, res) => {
    console.log("req.query.word: ", req.query.word);
    if (!!req.query.word) {
      const searchWord = req.query.word;
      const likeNameItems = await knex
        .select({ id: "id", itemName: "item_name" })
        .from("item");
      if (likeNameItems.length) {
        return res.status(200).send();
      }
      return res.status(200).send([]);
    }
    return res.status(400).send();
  });

  app.get("/api/items/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const itemData = await knex
        .select(
          "item.item_name",
          "type.type_name",
          "station.station_name",
          "station.address",
          "station.day_time"
        )
        .from("item")
        .leftJoin("type", "item.type_id", "=", "type.id")
        .leftJoin("station", "type.id", "=", "station.type_id")
        .where("item.id", id)
        .first()
        .then((res) => ({
          itemName: res.item_name,
          typeName: res.type_name,
          stationName: res.station_name,
          stationAddress: res.address,
          stationDayTime: res.day_time,
        }));
      res.status(200).send(itemData);
    } catch (err) {
      console.log(err);
      return res.status(400).send();
    }
  });
  return app;
};

const server = setupServer();
const PORT = process.env.PORT || 3000;
module.exports = { setupServer };
app.listen(PORT, () => console.log(`listening on port : ${PORT}`));

// 品目:
// 分類:
// 回収施設名:
// 住所:
// 開設時間:
