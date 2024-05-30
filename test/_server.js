const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../server");
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
  describe("GET:/api/items?word={word}", () => {
    it("検索キーワードを含むid・品目名を返す", (done) => {
      request.get("/api/items?word=アイ").end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        // !
        // expect(res.body).to.equal();
        // console.log(res);
        // done();
      });
      request.get("/api/items?word=をををを").end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        // !
        expect(res.body).to.eql([]);
        // console.log(res);
        done();
      });
    });
    xit("検索キーワードがなかったらを返す400", (done) => {
      request.get("/api/items?word=").end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        // !
        // console.log(res);
        done();
      });
    });
  });
  describe("GET:/api/items/:id", () => {
    it("指定idの品目名・分類・施設名・住所・開設時間を返す", (done) => {
      request.get("/api/items/29").end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        // !
        done();
      });
    });
  });
});
