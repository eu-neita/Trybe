const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();

const validateTeamChocolate = (req, res, next) => {
  const { id } = req.params;
  const isNumber = Number(id);
  if(Number.isNaN(isNumber)) {
    res.status(400).send({ message: 'não é um numero'});
  } else {
    next();
  }
};

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/:id', validateTeamChocolate, async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

module.exports = app;