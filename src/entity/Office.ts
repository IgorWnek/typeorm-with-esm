import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { User } from './User.js';

@Entity()
export class Office {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'text' })
  location: string;

  @ManyToMany(() => User, (user) => user.offices)
  users?: User[];

  constructor({ location, id, users = [] }: { location: string; id?: string; users?: User[] }) {
    this.location = location;
    this.id = id;
    this.users = users;
  }
}
