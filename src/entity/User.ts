import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from 'typeorm';
import { Company } from './Company.js';
import { Office } from './Office.js';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'text' })
  name: string;

  @ManyToOne(() => Company, (company) => company.users)
  company: Company;

  @ManyToMany(() => Office, (office) => office.users)
  offices: Office[];

  constructor({ name, company, id, offices = [] }: { name: string; company: Company; id?: string, offices?: Office[] }) {
    this.name = name;
    this.company = company;
    this.offices = offices;
    this.id = id;
  }
}
