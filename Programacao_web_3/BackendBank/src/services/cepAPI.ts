import axios from "axios";

const baseURL = "https://brasilapi.com.br/api/cep/v1"

interface brasilAPI {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
}

const cepAPI = async (cep: string): Promise<brasilAPI> => {
  return (await axios.get<brasilAPI>(`${baseURL}/${cep}`)).data
}

export default cepAPI