/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/typeorm/entities/Category';
import { AddCategoryParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

  getAll() {
    return this.categoryRepository.find()
  }

  add(CategoryDetails: AddCategoryParams) {
    const newCategory = this.categoryRepository.create({...CategoryDetails})
    return this.categoryRepository.save(newCategory)
  }

  excluir(id: number) {
    this.categoryRepository.delete(id)
  }
}