import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './User.js';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'text' })
  name: string;

  @OneToMany(() => User, (user) => user.company)
  users?: User[];

  constructor({ name, id, users = [] }: { name: string; id?: string; users?: User[] }) {
    this.name = name;
    this.id = id;
    this.users = users;
  }
}
