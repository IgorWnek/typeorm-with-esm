import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from 'typeorm';
import { Company } from './Company.js';
import { Office } from './Office.js';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Company, (company) => company.users)
  company: Company;

  @ManyToMany(() => Office, (office) => office.users)
  offices: Office[];
}