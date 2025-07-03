const mysql = require("mysql");

describe("Teste de conexão com o banco de dados", () => {
  it("Deve conectar com sucesso ao banco", (done) => {
    const db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "imobiliaria",
      port: 3306,
    });

    db.connect((err) => {
      try {
        expect(err).toBeNull();
        done();
      } catch (e) {
        done(e);
      } finally {
        db.end(); // sempre fecha, com ou sem erro
      }
    });
  });
});
