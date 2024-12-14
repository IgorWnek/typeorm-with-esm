import 'reflect-metadata';
import { AppDataSource } from './config/data-source.js';
import { UserRepository } from './repository/UserRepository.js';
import { CompanyRepository } from './repository/CompanyRepository.js';
import { OfficeRepository } from './repository/OfficeRepository.js';

const COMPANIES = [
  { name: 'TechCorp' },
  { name: 'InnovSoft' },
  { name: 'DataSystems' },
  { name: 'CloudTech' },
  { name: 'DevMatrix' }
];

const OFFICES = [
  { location: 'Rzeszow' }, { location: 'Warsaw' }, { location: 'Krakow' },
  { location: 'Gdansk' }, { location: 'Wroclaw' }, { location: 'Poznan' },
  { location: 'London' }, { location: 'Berlin' }, { location: 'Paris' },
  { location: 'Madrid' }, { location: 'Rome' }, { location: 'Amsterdam' },
  { location: 'Brussels' }, { location: 'Vienna' }, { location: 'Prague' },
  { location: 'Stockholm' }, { location: 'Oslo' }, { location: 'Copenhagen' },
  { location: 'Helsinki' }, { location: 'Dublin' }
];

const USERS = [
  'John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Williams', 'David Brown',
  'Emma Davis', 'James Wilson', 'Lisa Anderson', 'Robert Taylor', 'Mary Thomas',
  'Daniel White', 'Laura Martin', 'Steven Clark', 'Patricia Lewis', 'Joseph Moore',
  'Jennifer Hall', 'Richard Adams', 'Susan Campbell', 'Charles Baker', 'Karen Evans',
  'Thomas Green', 'Nancy King', 'Christopher Lee', 'Margaret Wright', 'Kevin Hill',
  'Sandra Scott', 'Paul Young', 'Betty Turner', 'Mark Walker', 'Helen Martinez'
];

AppDataSource.initialize().then(async () => {
  const companyRepo = new CompanyRepository(AppDataSource);
  const officeRepo = new OfficeRepository(AppDataSource);
  const userRepo = new UserRepository(AppDataSource);

  const companies = await companyRepo.createMany(COMPANIES);
  const offices = await officeRepo.createMany(OFFICES);

  const userData = USERS.map((name, index) => ({
    name,
    company: companies[index % companies.length],
    offices: [
      offices[index % offices.length],
      offices[(index + 1) % offices.length]
    ]
  }));

  const users = await userRepo.createMany(userData);

  console.log(`Created ${companies.length} companies`);
  console.log(`Created ${offices.length} offices`);
  console.log(`Created ${users.length} users`);
}).catch((error) => console.log(error));
