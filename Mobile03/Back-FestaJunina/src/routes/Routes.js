import { Router } from "express";

import {
  getAllItemsForSale,
  createItemForSale,
  deleteItemForSale
} from '../controllers/Item.controller.js';

import { 
  addSellRecord, 
  deleteSellRecord, 
  getAllSellsRecord,
  deleteAllSellRecords
} from '../controllers/Sale.controller.js';

import {
  getStatistics
} from '../controllers/Statistics.controller.js';

const routes = Router();

// Rotas para itens à venda
routes.get("/items-for-sale", getAllItemsForSale); // Recupera todos os itens à venda
routes.post("/items-for-sale", createItemForSale); // Cria um novo item à venda
routes.delete("/items-for-sale/:id", deleteItemForSale); // Deleta um item à venda específico

// Rotas para registros de vendas
routes.get("/sell-records", getAllSellsRecord); // Recupera todos os registros de vendas
routes.post("/sell-records", addSellRecord); // Cria um novo registro de venda
routes.delete("/sell-records/:id", deleteSellRecord); // Deleta um registro de venda específico
routes.delete("/sell-records-all", deleteAllSellRecords); // Deleta todos os registros de venda

// Rota para mostrar estatisticas
routes.get("/statistics", getStatistics)

export default routes