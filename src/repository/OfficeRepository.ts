import { DataSource } from 'typeorm';
import { Office } from '../entity/Office.js';

export class OfficeRepository {
  private repository;

  constructor(private dataSource: DataSource) {
    this.repository = dataSource.getRepository(Office);
  }

  async createMany(offices: { location: string }[]): Promise<Office[]> {
    const entities = offices.map(o => this.repository.create(o));
    return await this.repository.save(entities);
  }
}