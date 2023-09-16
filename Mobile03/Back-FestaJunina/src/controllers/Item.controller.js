import { Item } from '../models/Database.js'

const getAllItemsForSale = async (req, res) => {
  try {
  res.status(200).json(await Item.itensForSale())
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Erro na consulta dos itens' })
  }
}

const createItemForSale = async (req, res) => {
  try {
    const { name, price, desactive=false } = req.body

    //name and price requered
    if (!name || !price) {
      return res.status(400).json({ message: 'Preencha todos os campos' })
    }
    //price is number 
    if (typeof price !== 'number') {
      return res.status(400).json({ message: 'Preço inválido' })
    }
    //desactive is boolean
    if (typeof desactive !== 'boolean') {
      return res.status(400).json({ message: 'Desativado inválido' })
    }

    const itemForSale = await Item.addItemForSale(name, price, desactive)
    res.status(201).json(itemForSale)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Erro na criação do item' })
  }
}

const deleteItemForSale = async (req, res) => {
  try {
    const { id } = req.params
    const itemForSale = await Item.deleteItemForSale(id)
    res.status(200).json({ message: `Item ${itemForSale.name} deletado com sucesso`})
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Erro na exclusão do item' })
  } 
}

export {
  getAllItemsForSale,
  createItemForSale,
  deleteItemForSale
}