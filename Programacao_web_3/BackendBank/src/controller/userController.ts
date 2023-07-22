import { randomUUID } from "node:crypto";
import { Database } from "../database";
import { userInterface, userInputInterface, userAddInterface } from "../interfaces/user";
import returnMessage from "../logs/logger"
import cepAPI from "../services/cepAPI";
import cleanerAddress from "../utils/cleanAddress";

const database = new Database();

const table = "user";

const allUsers = (req: any, res: any) => {
  const user: userInterface = database.select(table);
  res.json(user);
}

const balanceById = (req: any, res: any) => {
  const { id } = req.params;

  const userExist: boolean = !!database.select(table, id);

  if (userExist) {
    const user: userInterface = database.select(table, id);

    res.json({...returnMessage(207, user), value: user.balance});
  } else {
    res.status(404).json(returnMessage(400));
  }
}

const historyById = (req: any, res: any) => {
  const { id } = req.params;

  const result: userInterface = database.select(table, id);

  if (result) {
    return res.json(result.history);
  }

  res.status(400).json(returnMessage(400));
}

const addNewUser = async (req: any, res: any) => {
  const { name, email, cpf, address }: userAddInterface = req.body;

  const searchAPI = await cepAPI(address.cep)

  if(!name || !email || !cpf || !address.cep || !address.number) {
    return res.status(400).json(returnMessage(405));
  }

  const user: userInterface = {
    id: randomUUID(),
    name,
    email,
    cpf,
    address: {...cleanerAddress(searchAPI), numero: address.number},
    history: [],
    balance: 0
  }

  database.insert(table, user);

  res.status(201).json(returnMessage(201, user));
}

const deleteUser = (req: any, res: any) => {
  const { id } = req.params;

  const userExist: boolean = !!database.select(table, id);
  const user: userInterface = database.select(table, id);

  if (userExist) {
    database.delete(table, id);
    return res.status(202).json(returnMessage(202, user));
  }

  res.status(400).json(returnMessage(400));
}

const alterUser = async (req: any, res: any) => {
  const { id } = req.params
  const { name, email, cpf, address }: userInputInterface = req.body

  const userExist: boolean = !!database.select(table, id)
  const user: any = { name, email, cpf }
  const filteredUser: any = {};

  for (const key in user) {
    if (user[key] !== undefined) {
      filteredUser[key] = user[key];
    }
  }

  if (address) {
    user.address = {...cleanerAddress(await cepAPI(address.cep)), numero: address.number}
  }
  const userDatabase: userInterface = {...database.select(table, id)}
  const userAlter = {...userDatabase, ...filteredUser}

  if (userExist) {
    database.update(table, id, userAlter);

    return res.status(201).json(returnMessage(203, userAlter));
  }

  res.status(400).json(returnMessage(400));
}

const transactionOperations = (req: any, res: any) => {
  const { id } = req.params;
  const { type, value } = req.body;

  const userExist: boolean = !!database.select(table, id);

  if (userExist) {
    const user: userInterface = database.select(table, id);
    const balance: number = user.balance;

    switch (type) {
      case "deposit":
        user.balance += Number(value);
        user.history.push({
          type,
          value,
          balance: user.balance
        })
        break;

      case "withdraw":
        if (balance >= Number(value)) {
          user.balance -= Number(value);

          user.history.push({
            type,
            value,
            balance: user.balance
          })
        } else {
          return res.status(404).json(returnMessage(402));
        }
        break;

      default:
        return res.status(404).json(returnMessage(403));  
      }
      
      res.status(200).json(returnMessage(205, user));
      database.update(table, id, user);
  } else {
    res.status(404).json(returnMessage(400));
  }
}

const transferOperation = (req: any, res: any) => {
  const { source, destination, value } = req.body;

  const sourceExist: boolean = !!database.select(table, source);
  const destinationExist: boolean = !!database.select(table, destination);

  if( sourceExist && destinationExist ) {
    const sourceUser: userInterface = database.select(table, source);
    const destinationUser: userInterface = database.select(table, destination);

    if (sourceUser.balance >= Number(value)) {
      sourceUser.balance -= Number(value);
      destinationUser.balance += Number(value);

      sourceUser.history.push({
        type: "transfer",
        destination: destinationUser.id,
        value,
        balance: sourceUser.balance,
      })
      destinationUser.history.push({
        type: "transfer",
        source: sourceUser.id,
        value,
        balance: destinationUser.balance
      })
    } else {
      return res.status(404).json(returnMessage(402));
    }
     
    database.update(table, source, sourceUser);
    database.update(table, destination, destinationUser);
    res.status(200).json(returnMessage(206, sourceUser, destinationUser));
  } else {
    res.status(404).json(returnMessage(400));
  }
}

export {
  allUsers,
  balanceById,
  historyById,
  addNewUser,
  deleteUser,
  alterUser,
  transactionOperations,
  transferOperation
}