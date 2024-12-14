
import { DataSource } from 'typeorm';
import { User } from '../entity/User.js';
import { Company } from '../entity/Company.js';
import { Office } from '../entity/Office.js';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'myapp_db',
  synchronize: true,
  logging: false,
  entities: [User, Company, Office],
  migrations: [],
  subscribers: [],
});