import { DataSource } from 'typeorm';
import { Office } from '../entity/Office.js';

export class OfficeRepository {
  private repository;

  constructor(private dataSource: DataSource) {
    this.repository = dataSource.getRepository(Office);
  }

  // ...custom methods using this.repository...
}