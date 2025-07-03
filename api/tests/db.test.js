const mysql = require("mysql");

describe("Testar conexão com o banco de dados", () => {
  it("Deve conectar ao banco de dados com sucesso", (done) => {
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "imobiliaria2",
      port: 3307,
    });

    connection.connect((err) => {
      expect(err).toBeNull();
      connection.end();
      done();
    });
  });
});
