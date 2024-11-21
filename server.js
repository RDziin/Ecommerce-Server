import express from 'express';
import { productDataBase } from "./dataBase.js";

const server = express();
const dataBase = new productDataBase();

server.use(express.json());

server.post("/produtos", (req, rep) => {
  const { name, price, quantify } = req.body;

  dataBase.create({
    name,
    price,
    quantify,
  });

  return rep.status(201).send();
});

server.get("/produtos", () => {
  const products = dataBase.list();
  console.clear()
  console.log(products);

  return products;
});

server.put("/produtos/:id", (req, rep) => {
  const productId = req.params.id;

  const { name, price, quantify } = req.body;

  dataBase.update(productId, {
    name,
    price,
    quantify,
  });

  return rep.status(204).send()
});

server.delete('/produtos/:id', (req, rep) =>{
    const productId = req.params.id;

    dataBase.delete(productId)

    return rep.status(204).send()
})

server.listen(3000)