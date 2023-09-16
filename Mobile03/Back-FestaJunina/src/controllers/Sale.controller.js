import { Item, Sale } from "../models/Database.js";

const getAllSellsRecord = async (req, res) => {
  try {
    const sells = await Sale.getAllSells();
    const itemsForSale = await Item.itensForSale();

    const result = sells.map(sale => {
      const item = itemsForSale.find(item => item.id === sale.itemId);
      return {
        id: sale.id,
        name: item.name,
        price: item.price,
        quantity: sale.quantity
      }
    })

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro na consulta dos registros de vendas' });
  }
}

const addSellRecord = async (req, res) => {
  const { itemId, quantity } = req.body

  if (!itemId || !quantity) {
    return res.status(400).json({ message: 'Preencha todos os campos necessarios' })
  }
  // ItemId is string
  if (typeof itemId !== 'string') {
    return res.status(400).json({ message: 'Id inválido' })
  }
  // Quantity is number
  if (typeof quantity !== 'number') {
    return res.status(400).json({ message: 'Quantidade inválida' })
  }

  const item = await Item.itensForSaleById(itemId)
  if (!item) {
    return res.status(404).json({ message: 'Item não encontrado' })
  }
  if (item.desactive) {
    return res.status(400).json({ message: 'Item desativado' })
  }

  const totalPrice = quantity * item.price
  try {
    const sellRecord = await Sale.addSellRecord(itemId, quantity, totalPrice)

    res.status(201).json(sellRecord);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro na criação do registro de venda' });
  }
}

const deleteSellRecord = async (req, res) => {
  const { password } = req.body
  const { id } = req.params

  if (password !== 'admin') {
    return res.status(401).json({ message: 'Senha inválida' })
  }

  try {
    const sellRecord = await Sale.deleteSellRecord(id);
    res.status(200).json(sellRecord);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro na exclusão do registro de venda' });
  }
}

const deleteAllSellRecords = async (req, res) => {
  const { password } = req.body

  if (password !== 'admin') {
    return res.status(401).json({ message: 'Senha inválida' })
  }
  try {
    const sellRecords = await Sale.deleteAllSellRecords();
    res.status(200).json(sellRecords);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro na exclusão de todos os registros de venda' });
  }
}

export {
  getAllSellsRecord,
  addSellRecord,
  deleteSellRecord,
  deleteAllSellRecords
}