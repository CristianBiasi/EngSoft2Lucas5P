const request = require("supertest");
const express = require("express");
const imovelRoutes = require("../routes/imoveis");

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
    expect(res.body.message).toContain("Imovel criado com sucesso");
  });
});
