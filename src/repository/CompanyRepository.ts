import { DataSource } from 'typeorm';
import { Company } from '../entity/Company.js';

export class CompanyRepository {
  private repository;

  constructor(private dataSource: DataSource) {
    this.repository = dataSource.getRepository(Company);
  }

  async createMany(companies: { name: string }[]): Promise<Company[]> {
    const entities = companies.map(c => this.repository.create(c));
    return await this.repository.save(entities);
  }
}
