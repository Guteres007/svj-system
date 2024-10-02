import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

const DATABASE_URL =
  process.env.DATABASE_URL ?? 'postgre://svj:password@localhost/svj';

export const DB_CONFIG: DataSourceOptions = {
  type: 'postgres',
  url: DATABASE_URL,
};

export const AppDataSource = new DataSource({
  ...DB_CONFIG,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
});
