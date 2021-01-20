import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
class Name {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  @Unique(['name'])
  public name: string;

  // Defaults to 1 when new name created
  @Column({ default: 1 })
  public amount: number;
}

export default Name;
