import { addressWithNumeroInterface, inputAddressInterface } from "./address";
import historyInterface from "./history";

interface userInterface {
  id: string
  name: string
  email: string
  cpf: string
  address: addressWithNumeroInterface
  history: historyInterface[]
  balance: number
}

interface userInputInterface {
  name?: string
  email?: string
  cpf?: string
  address?: inputAddressInterface
}

interface userAddInterface {
  name: string
  email: string
  cpf: string
  address: inputAddressInterface
}

export {
  userInterface,
  userInputInterface,
  userAddInterface
}