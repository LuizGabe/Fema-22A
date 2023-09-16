import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const itensForSale = async () => {
  try {
    const itensForSale = await prisma.item.findMany();
    return itensForSale
  } catch (error) {
    console.log(error);
  }
}

const itensForSaleById = async ( id ) => {
  try {
    const itensForSale = await prisma.item.findUnique({
      where: {
        id
      }
    })
    return itensForSale
  } catch (error) {
    console.log(error);
  }
}

const addItemForSale = async ( name, price, desactive=false ) => {
  try {
    const itemForSale = await prisma.item.create({
      data: {
        name,
        price,
        desactive
      }
    })
    return itemForSale
  } catch (error) {
    console.log(error);
  }
}

const deleteItemForSale = async ( id ) => {
  try {
    const itemForSale = await prisma.item.delete({
      where: {
        id
      }
    })
    return itemForSale
  } catch (error) {
    console.log(error);
  }
}

const addSellRecord = async ( itemId, quantity, totalPrice ) => {
  try {
    const sellRecord = await prisma.sale.create({
      data: {
        itemId,
        quantity,
        totalPrice
      }
    })
    return sellRecord
  } catch (error) {
    console.log(error);
  }
}

const deleteSellRecord = async ( id ) => {
  try {
    const sellRecord = await prisma.sale.delete({
      where: {
        id
      }
    })
    return sellRecord
  } catch (error) {
    console.log(error);
  }
}

const getAllSells = async () => {
  try {
    const sells = await prisma.sale.findMany();
    return sells
  } catch (error) {
    console.log(error);
  }
}

const deleteAllSellRecords = async () => {
  try {
    const sells = await prisma.sale.deleteMany();
    return sells
  } catch (error) {
    console.log(error);
  }
}

const Item = {
  itensForSale,
  itensForSaleById,
  addItemForSale,
  deleteItemForSale
}

const Sale = {
  addSellRecord,
  deleteSellRecord,
  getAllSells,
  deleteAllSellRecords
}

export {
  Item,
  Sale
}
