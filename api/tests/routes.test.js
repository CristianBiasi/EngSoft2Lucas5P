import request from "supertest";
import express from "express";
import imovelRoutes from "../routes/imoveis.js";

const app = express();
app.use(express.json());
app.use("/imoveis", imovelRoutes);

describe("Rotas de Imoveis", () => {
  it("GET /imoveis - Deve retornar status 200", async () => {
    const res = await request(app).get("/imoveis");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
