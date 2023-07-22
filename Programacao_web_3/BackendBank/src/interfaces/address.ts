interface addressInterface {
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
  uf: string;
}

interface addressWithNumeroInterface extends addressInterface {
  numero: number;
}

interface brasilapiInterface {
  cep: string
  state: string
  city: string
  neighborhood: string
  street: string
}

interface inputAddressInterface {
  cep: string
  number: number
}

export {
  brasilapiInterface,
  addressInterface,
  addressWithNumeroInterface,
  inputAddressInterface
}