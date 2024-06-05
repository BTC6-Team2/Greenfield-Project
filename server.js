const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const config = require('./knexfile');
const environment = process.env.DATABASE_URL ? 'production' : 'development';
const knex = require('knex')(config[environment]);
console.log('environment', environment);

// ======曖昧検索用helper============
function kanaToHira(str) {
    return str.replace(/[\u30a1-\u30f6]/g, function (match) {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    });
}
function hiraToKana(str) {
    return str.replace(/[\u3041-\u3096]/g, function (match) {
        var chr = match.charCodeAt(0) + 0x60;
        return String.fromCharCode(chr);
    });
}
// =================================
const setupServer = () => {
    app.use(cors());
    app.use(express.json());
    app.use(
        '/',
        express.static(__dirname + '/frontend/dist', {
            redirect: false,
        })
    );
    app.use(express.urlencoded({ extended: false }));
    // これは何？？
    app.use(
        session({
            secret: 'keyboard cat', //秘密鍵
            resave: true,
            saveUninitialized: false,
        })
    );
    // 特定のルートのルーターをappで機能させる
    app.use('/', require('./routes/index'));

    app.get('/api/stations', async (req, res) => {
        const allStations = await knex
            .distinct(
                'address',
                'day_time',
                'station_name',
                'latitude',
                'longitude'
            )
            .from('station');
        res.send(allStations);
    });

    app.get('/api/items', async (req, res) => {
        const searchWord = req.query.word;
        const regex = /^[ぁ-ん]/u;
        const regex2 = /^[ァ-ヴ]/u;
        let searchWordHira;
        let searchWordKana;

        if (regex.test(searchWord)) {
            searchWordHira = searchWord;
            searchWordKana = hiraToKana(searchWord);
        } else if (regex2.test(searchWord)) {
            searchWordKana = searchWord;
            searchWordHira = kanaToHira(searchWord);
        } else {
            searchWordKana = searchWord;
            searchWordHira = searchWord;
        }
        console.log('searchWord: ', searchWord);
        console.log('searchWordKana: ', searchWordKana);
        console.log('searchWordHira: ', searchWordHira);

        const likeNameItems =
            searchWord === 'undefined'
                ? await knex
                      .select({ id: 'id', itemName: 'item_name' })
                      .from('item')
                : await knex
                      .select({ id: 'id', itemName: 'item_name' })
                      .from('item')
                      .whereLike('item_name', `%${searchWordHira}%`)
                      .orWhereLike('item_name', `%${searchWordKana}%`);
        if (likeNameItems.length) {
            return res.status(200).send(likeNameItems);
        }
        return res.status(200).send([]);
        // }
    });

    app.get('/api/items/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const itemData = await knex
                .select(
                    'item.item_name',
                    'type.type_name',
                    'station.station_name',
                    'station.address',
                    'station.day_time',
                    'station.latitude',
                    'station.longitude'
                )
                .from('item')
                .leftJoin('type', 'item.type_id', '=', 'type.id')
                .leftJoin('station', 'item.type_id', '=', 'station.type_id')
                .where('item.id', id)
                // .first()
                .then((res) => ({
                    itemName: res[0].item_name,
                    typeName: res[0].type_name,
                    station: res.map((ele) => ({
                        stationName: ele.station_name,
                        stationAddress: ele.address,
                        stationDayTime: ele.day_time,
                        stationLatitude: ele.latitude,
                        stationLongitude: ele.longitude,
                    })),
                }));
            res.status(200).send(itemData);
        } catch (err) {
            console.log(err);
            return res.status(400).send();
        }
    });

    app.use((req, res, next) => {
        res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
    });
    return app;
};

const server = setupServer();
const PORT = process.env.PORT || 3000;
module.exports = { setupServer };
app.listen(PORT, () =>
    console.log(`listening on port : http://localhost:${PORT}`)
);
