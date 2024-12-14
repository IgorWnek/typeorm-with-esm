import 'reflect-metadata';
import { AppDataSource } from './config/data-source.js';
import { User } from './entity/User.js';
import { Company } from './entity/Company.js';
import { Office } from './entity/Office.js';

AppDataSource.initialize().then(async () => {
  const company = new Company();
  company.name = 'TechCorp';
  await AppDataSource.manager.save(company);

  const office = new Office({ location: 'Rzeszow' });
  await AppDataSource.manager.save(office);

  const user = new User();
  user.name = 'John Doe';
  user.company = company;
  user.offices = [office];
  await AppDataSource.manager.save(user);

  console.log('Data has been saved.');
}).catch((error) => console.log(error));
