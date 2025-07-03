const request = require("supertest");
const express = require("express");
const imovelRoutes = require("../routes/imoveis");

const app = express();
app.use(express.json());
app.use("/imoveis", imovelRoutes);

describe("GET /imoveis", () => {
  it("Deve retornar status 200", async () => {
    const res = await request(app).get("/imoveis");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
