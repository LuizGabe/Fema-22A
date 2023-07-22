import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Video entity, service and controller
import { Video } from './typeorm/entities/video';
import { VideoModule } from './video/video.module';
import { VideoService } from './video/services/video/video.service';
import { VideoController } from './video/controllers/video/video.controller';

// Category entity, service and controller
import { Category } from './typeorm/entities/Category';
import { CategoryModule } from './category/category.module';
import { CategoryService } from './category/services/category/category.service';
import { CategoryController } from './category/controllers/category/category.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'senha',
      database: 'atividade',
      entities: [Video, Category],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Video, Category]),
    VideoModule,
    CategoryModule,
  ],
  controllers: [VideoController, CategoryController],
  providers: [VideoService, CategoryService],
})
export class AppModule {}
