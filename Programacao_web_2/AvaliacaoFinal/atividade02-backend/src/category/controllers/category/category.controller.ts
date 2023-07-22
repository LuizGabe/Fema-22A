import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { CategoryService } from '../../services/category/category.service';

@Controller('categoria')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  async getCategory() {
    return this.categoryService.getAll();
  }

  @Post('/salvar-editar')
  async add(@Body() addCategoryDto) {
    await this.categoryService.add(addCategoryDto);
    return 'Adicionado com sucesso!';
  }

  @Delete('/excluir/:id')
  async excluirCategory(@Param() parametros) {
    this.categoryService.excluir(parametros.id);
    return `O id ${parametros.id} foi excluido com exito.`;
  }
}
