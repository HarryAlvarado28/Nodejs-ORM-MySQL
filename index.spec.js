const { it } = require("mocha");
const supertest = require("supertest");
const app = require("./index");
describe("Metodos Base del INDEX", () => {
  it("GET Method", (done) => {
    supertest(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, { ok: true, msg: "GET Method - Cool!" }, done);
  });
  it("POST Method", (done) => {
    supertest(app)
      .post("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          ok: true,
          msg: "POST Method - Cool!",
        },
        done
      );
  });
  it("GET Method - DB STATUS", (done) => {
    supertest(app)
      .get("/dbstatus")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          ok: true,
          msg: "GET Method - DB STATUS",
          info: "Connection has been established successfully.",
        },
        done
      );
  });
});
