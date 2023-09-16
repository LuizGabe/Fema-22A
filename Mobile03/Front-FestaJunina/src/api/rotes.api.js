import api from "./api";

const itensForSale = async () => {
  return (await api.get("/items-for-sale")).data
}

const getAllSellRecords = async () => {
  return (await api.get("/sell-records")).data
}

const addSellRecord = async (itemId, quantity) => {
  return (await api.post("/sell-records", { itemId, quantity })).data
}

const deleteSellRecord = async (id, password) => {
  return (await api.delete(`/sell-records/${id}`, { data: { password } })).data
}

export {
  itensForSale,
  getAllSellRecords,
  addSellRecord,
  deleteSellRecord
}