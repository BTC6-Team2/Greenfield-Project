const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const path = require("path");

const config = require("./knexfile");
const environment = process.env.DATABASE_URL ? "production" : "development";
const knex = require("knex")(config[environment]);

// module.exports = knex(config[environment]);

const setupServer = () => {
  //----------------------------------
  app.use("/signin", express.static(__dirname + "/frontend/dist"));
  app.use(express.urlencoded({ extended: false }));
  // これは何？？
  app.use(
    session({
      secret: "keyboard cat", //秘密鍵
      resave: true,
      saveUninitialized: false,
    })
  );
  // 特定のルートのルーターをappで機能させる
  app.use("/signin", require("./routes/index"));
  //----------------------------------

  app.use(cors());
  app.use(express.json());
  // app.use("/", express.static(__dirname + "/frontend/dist"));

  app.get("/api/stations", async (req,res) => {
    const allStations = await knex
    .distinct(
      "address",
      "day_time",
      "station_name",
      "latitude",
      "longitude",
    )
    .from("station");
    res.send(allStations)
  })

  app.get("/api/items", async (req, res) => {
    // console.log("req.query.word: ", req.query.word);
    // if (!!req.query.word) {
    const searchWord = req.query.word;
    const likeNameItems = await knex
      .select({ id: "id", itemName: "item_name" })
      .from("item")
      .whereLike("item_name", `%${searchWord}%`);
    if (likeNameItems.length) {
      return res.status(200).send(likeNameItems);
    }
    return res.status(200).send([]);
    // }
    // return res.status(200).send([]);
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
          "station.day_time",
          "station.latitude",
          "station.longitude",
        )
        .from("item")
        .leftJoin("type", "item.type_id", "=", "type.id")
        .leftJoin("station", "item.type_id", "=", "station.type_id")
        .where("item.id", id)
        // .first()
        .then((res) => ({
          itemName: res[0].item_name,
          typeName: res[0].type_name,
          station: res.map((ele) => ({
            stationName: ele.station_name,
            stationAddress: ele.address,
            stationDayTime: ele.day_time,
            stationLatitude: ele.latitude,
            stationLongitude: ele.longitude
          })),
          
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
