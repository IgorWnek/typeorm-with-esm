import { DataSource } from 'typeorm';
import { Company } from '../entity/Company.js';

export class CompanyRepository {
  private repository;

  constructor(private dataSource: DataSource) {
    this.repository = dataSource.getRepository(Company);
  }

  // ...custom methods using this.repository...
}