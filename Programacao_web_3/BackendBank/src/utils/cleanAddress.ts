import { brasilapiInterface, addressInterface } from "../interfaces/address"

const cleanerAddress = (address: brasilapiInterface): addressInterface => {
  const { cep, state: uf, city: cidade, neighborhood: bairro, street: rua } = address 

  return {
    cep,
    uf,
    cidade,
    bairro,
    rua
  }
}

export default cleanerAddress