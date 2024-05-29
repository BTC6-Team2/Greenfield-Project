const express = require("express");
const app = express();
const cors = require("cors");

const config = require("./knexfile");
const environment = process.env.DATABASE_URL ? "production" : "development";
const knex = require("knex")(config[environment]);

// module.exports = knex(config[environment]);

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`listening on port : ${PORT}`));
