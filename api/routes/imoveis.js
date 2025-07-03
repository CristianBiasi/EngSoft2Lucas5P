const express = require("express");
const { addImovel, deleteImovel, getImoveis, updateImovel } = require("../controllers/imovel");

const router = express.Router();
router.get("/", getImoveis);
router.post("/", addImovel);
router.put("/:id", updateImovel);
router.delete("/:id", deleteImovel);

module.exports = router;
