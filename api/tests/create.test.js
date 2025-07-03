const request = require("supertest");
const express = require("express");
const imovelRoutes = require("../routes/imoveis");

const app = express();
app.use(express.json());
app.use("/imoveis", imovelRoutes);

describe("POST /imoveis", () => {
  it("Deve criar um novo imóvel e retornar status 200", async () => {
    const novoImovel = {
      fone: "11999999999",
      preco: 350000,
      endereco: "Rua Teste, 123",
      corretora: "Imobiliária Teste"
    };

    const res = await request(app).post("/imoveis").send(novoImovel);
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe("Imovel criado com sucesso.");
  });
});
