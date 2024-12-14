import { DataSource } from 'typeorm';
import { User } from '../entity/User.js';
import { Company } from '../entity/Company.js';
import { Office } from '../entity/Office.js';

export class UserRepository {
  private repository;

  constructor(private dataSource: DataSource) {
    this.repository = dataSource.getRepository(User);
  }

  async createMany(userData: { name: string, company: Company, offices: Office[] }[]): Promise<User[]> {
    const entities = userData.map(data => this.repository.create(data));
    return await this.repository.save(entities);
  }
}