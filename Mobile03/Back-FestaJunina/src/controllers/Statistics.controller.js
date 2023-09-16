import { Item, Sale } from '../models/Database.js'

const getStatistics = async (req, res) => {
  try {
    const allItemsForSale = await Item.itensForSale()
    const allItemsSold = await Sale.getAllSells()
    
    // SUM of all items sold
    const totalItemsSold = allItemsSold.length

    // SUM of all items for sale - desactive itens
    const totalItemsForSale = allItemsForSale.filter(item => !item.desactive).length;

    // SUM of all items sold
    const totalSumItemsSold = allItemsSold.reduce((a, b) => a + b.totalPrice, 0)

    // Average price of sold items
    const averagePriceSold = allItemsSold.length > 0 ? totalSumItemsSold / allItemsSold.length : 0;

    // Average value per sale
    const averageValuePerSale = totalItemsSold > 0 ? totalSumItemsSold / totalItemsSold : 0;

    // Items most sold
    const mostSoldItems = allItemsSold
      .reduce((itemMap, sale) => {
        itemMap[sale.itemId] = (itemMap[sale.itemId] || 0) + sale.quantity;
        return itemMap;
      }, {});
    const sortedMostSoldItems = Object.keys(mostSoldItems)
      .sort((a, b) => mostSoldItems[b] - mostSoldItems[a]);

    // Items least sold
    const leastSoldItems = allItemsForSale
      .filter(item => !item.desactive)
      .filter(item => !mostSoldItems[item.id])
      .map(item => ({ id: item.id, name: item.name }));

    res.status(200).json({
      totalItemsSold,
      totalItemsForSale,
      totalSumItemsSold,
      averagePriceSold,
      averageValuePerSale,
      mostSoldItems,
      leastSoldItems
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Erro na consulta dos itens' })
  }
}

export {
  getStatistics
}