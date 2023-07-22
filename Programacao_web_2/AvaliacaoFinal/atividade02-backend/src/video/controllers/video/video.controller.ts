import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { VideoService } from '../../services/video/video.service';

@Controller('video')
export class VideoController {
  constructor(private videoService: VideoService) {}

  @Get()
  async getVideos() {
    return this.videoService.getAll();
  }

  @Post('/salvar-editar')
  async add(@Body() addVideoDto) {
    await this.videoService.add(addVideoDto);
    return 'Adicionado com sucesso!';
  }

  @Delete('/excluir/:id')
  async excluirVideo(@Param() parametros) {
    this.videoService.excluir(parametros.id);
    return `O id ${parametros.id} foi excluido com exito.`;
  }
}
