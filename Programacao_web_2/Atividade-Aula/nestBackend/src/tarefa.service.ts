import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Tarefa } from "./tarefa.entity";

@Injectable()
export class TarefaService {

    constructor(
        @InjectRepository(Tarefa)
        private readonly produtoRepository: Repository<Tarefa>,
    ) { }

    public findAll(): Promise<Tarefa[]> {
        return this.produtoRepository.find();
    }

    public findById(codigo: number): Promise<Tarefa> {
        return this.produtoRepository.findOneBy({ codigo });
    }

    public salvar(produto: Tarefa): Promise<Tarefa> {
        return this.produtoRepository.save(produto);
    }

    public async excluir(codigo: number): Promise<void> {
        await this.produtoRepository.delete(codigo);
    }
}