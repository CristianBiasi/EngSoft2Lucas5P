const mysql = require("mysql");

describe("Teste de conexão com o banco de dados", () => {
  it("Deve conectar com sucesso ao banco", (done) => {
    const db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "imobiliaria",
      port: 3306
    });

    db.connect((err) => {
      expect(err).toBeNull();
      db.end();
      done();
    });
  });
});
