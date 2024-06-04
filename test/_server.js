const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../server");
const { describe } = require("mocha");
const knex = require("knex")(require("../knexfile").development);

const server = setupServer();
describe("knex server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server).keepOpen();
    expect = chai.expect;
  });
  afterEach(() => {
    request.close();
  });

  it("stationの情報がとってこれる", (done) => {
    request.get("/api/stations").end((err, res) => {
      // console.log(res.body.length);
      const station = {
        address: "愛知県岡崎市下青野町天神６４",
        day_time:
          "毎週日曜日(年末年始、暴風雨時を除く) 午前９時〜午後４時(雨天も実施)",
        station_name: "六ツ美市民センター",
        latitude: "34.913185",
        longitude: "137.126875",
      };
      chai.expect(res.body.length).to.deep.equal(14);
      chai
        .expect(JSON.stringify(res.body[0]))
        .to.deep.equal(JSON.stringify(station));
    });
    done();
  });

  describe("GET:/api/items?word={word}", () => {
    it("検索キーワードを含むid・品目名を返す", (done) => {
      let item = "アイロン";
      request.get(`/api/items?word`).end(async (err, res) => {
        const resd = await res.body;
        chai.expect(err).to.be.null;
        chai.expect(res).to.have.status(200);
        chai.expect(resd.length).to.equal(123);
        // !
        // expect(res.body).to.equal();
        // console.log(res);
        // done();
      });
      // item = "をををを"
      // request.get(`/api/items?word=${item}`).end((err, res) => {
      //   // console.log(res.body)
      //   expect(err).to.be.null;
      //   expect(res).to.have.status(200);
      //   // !
      //   expect(res.body).to.eql([]);
      //   // console.log(res);
      done();
    });
  });
  // it("検索キーワードがなかったらを返す400", (done) => {
  //   request.get("/api/items?word=").end((err, res) => {
  //     expect(err).to.be.null;
  //     expect(res).to.have.status(400);
  //     // !
  //     // console.log(res);
  //     done();

  // });

  describe("GET:/api/items/:id", () => {
    it("指定idの品目名・分類・施設名・住所・開設時間を返す", (done) => {
      request.get("/api/items/29").end((err, res) => {
        const item = {
          itemName: "インスタントコーヒーのびん",
          typeName: "空き缶・空きびん",
          station: [
            {
              stationName: "総合資源ステーション りすた稲熊",
              stationAddress: "愛知県岡崎市稲熊町字７丁目１７番地１",
              stationDayTime: "毎日(土日・祝日含む) 午前９時〜午後４時",
              stationLatitude: "34.964817",
              stationLongitude: "137.181291",
            },
          ],
        };
        chai.expect(err).to.be.null;
        chai.expect(res).to.have.status(200);
        chai
          .expect(JSON.stringify(res.body))
          .to.deep.equal(JSON.stringify(item));

        // !
        done();
      });
    });
  });
});
