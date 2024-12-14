import { DataSource } from 'typeorm';
import { User } from '../entity/User.js';
import { Company } from '../entity/Company.js';
import { Office } from '../entity/Office.js';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'myapp_db',
  synchronize: true,
  logging: false,
  entities: [User, Company, Office],
  migrations: [],
  subscribers: [],
});