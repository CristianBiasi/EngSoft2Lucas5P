const express = require("express");
const imovelRoutes = require("./routes/imoveis");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/imoveis", imovelRoutes);

app.listen(8800, () => {
  console.log("Servidor iniciado com sucesso na porta 8800 🚀");
});
