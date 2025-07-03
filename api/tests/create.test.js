import request from "supertest";
import express from "express";
import imovelRoutes from "../routes/imoveis.js";

const app = express();
app.use(express.json());
app.use("/imoveis", imovelRoutes);

describe("POST /imoveis", () => {
  it("Deve criar um imóvel e retornar status 200", async () => {
    const newImovel = {
      fone: "99999-9999",
      preco: 350000,
      endereco: "Rua Teste, 123",
      corretora: "Imobiliária XYZ"
    };

    const res = await request(app)
      .post("/imoveis")
      .send(newImovel);

    expect(res.statusCode).toBe(200);
    expect(res.body).toContain("Imovel criado com sucesso");
  });
});
