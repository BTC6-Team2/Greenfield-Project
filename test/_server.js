const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
// const { setupServer } = require("../server");
const knex = require("../src/knex");

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
  describe("GET:/api/appliances", () => {
    it("全ての家電情報を返す", (done) => {
      request.get("/api/appliances").end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
    });
  });
  describe("GET:/api/appliances/:id", () => {
    it("指定されたidの家電情報を返す", (done) => {
      request.get("/api/appliances/29").end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        // !
        done();
      });
    });
  });
});
