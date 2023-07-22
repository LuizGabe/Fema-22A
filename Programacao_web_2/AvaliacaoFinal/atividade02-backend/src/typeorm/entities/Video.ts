import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'video' })
export class Video {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  id_Category: number;
}
