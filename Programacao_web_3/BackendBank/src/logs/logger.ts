interface MessageOptions {
  [code: number]: string | ((userA: any, userB: any) => string);
}

const messageOptions: MessageOptions = {
  400: "Usuário não encontrado!",
  401: "Acesso não autorizado!",
  402: "Saldo insuficiente!",
  403: "Operação não aceita!",
  405: "Informe todos os dados necessarios para a operação!",
  200: "Sucess!",
  201: (userA: any) => `Usuário ${userA.name} adicionado!`,
  202: (userA: any) => `Usuário ${userA.name} deletado!`,
  203: (userA: any) => `Usuário ${userA.name} alterado!`,
  204: "Operação realizada com sucesso!",
  205: (userA: any) => `Usuário ${userA.name} tem agora R$${userA.balance}`,
  206: (userA: any, userB: any) => `Usuário ${userA.name} tranferiu para o usuário ${userB.name} o valor de R$${userB.history[userB.history.length - 1].value}`,
  207: (userA: any) => `Usuário ${userA.name} possui R$${userA.balance} em sua conta!`
};

function returnMessage(code: number, userA?: any, userB?: any) {
  const message = messageOptions[code] || "Error genérico";

  let retorno = message;

  if (typeof message === "function") {
    retorno = message(userA, userB);
  }

  console.log(retorno);

  return { msg: retorno };
}

export default returnMessage;
