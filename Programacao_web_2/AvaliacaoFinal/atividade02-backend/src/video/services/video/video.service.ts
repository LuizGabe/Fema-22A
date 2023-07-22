import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddVideoParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { Video } from '../../../typeorm/entities/Video';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video) private videoRepository: Repository<Video>,
  ) {}

  getAll() {
    return this.videoRepository.find();
  }

  add(videoDetails: AddVideoParams) {
    const newVideo = this.videoRepository.create({ ...videoDetails });
    return this.videoRepository.save(newVideo);
  }

  excluir(id: number) {
    this.videoRepository.delete(id);
  }
}
