import { DataSource } from 'typeorm';
import { User } from '../entity/User.js';

export class UserRepository {
  private repository;

  constructor(private dataSource: DataSource) {
    this.repository = dataSource.getRepository(User);
  }

  // ...custom methods using this.repository...
}