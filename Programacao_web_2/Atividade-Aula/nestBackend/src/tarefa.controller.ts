/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Put, Param, Delete } from "@nestjs/common";
import { Tarefa } from './tarefa.entity'
import { TarefaService } from './tarefa.service'

@Controller()
export class TarefaController {
    
    constructor (
        private tarefaService: TarefaService
    ) {}

    @Get('/tarefa') 
    async listaTarefa():Promise<Tarefa[]> {
        return await this.tarefaService.findAll();
    }

    @Get('/tarefa/:codigo')
    async buscarPorCodigo(@Param() parametro) {
        return await this.tarefaService.findById(parametro.codigo);
    }

    @Delete("/tarefa/:codigo")
    async excluirTarefa(@Param() parametro) {
        await this.tarefaService.excluir(parametro.codigo);
        return "Deletado!"
    }

    @Put("/tarefa")
    async salvarTarefa(@Body() tarefa) {
        await this.tarefaService.salvar(tarefa);
        return "Ok!"
    }
    @Get('/tarefa/remover/todos')
    async removerTodos() {
      
      return 'Lista Removida com Sucesso!'
    }
}