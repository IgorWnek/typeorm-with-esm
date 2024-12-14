import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { User } from './User.js';

@Entity()
export class Office {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @ManyToMany(() => User, (user) => user.offices)
  users: User[];

  constructor({ location, id, users }: { location: string; id?: number; users?: User[] }) {
    this.location = location;
    if (id) this.id = id;
    if (users) this.users = users;
  }
}
