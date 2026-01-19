import { DATABASE_URL } from '@/env';
import { drizzle } from 'drizzle-orm/postgres-js';


export const db = drizzle(DATABASE_URL);
