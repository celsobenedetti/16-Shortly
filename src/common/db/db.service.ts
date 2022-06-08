import { Injectable } from '@nestjs/common';
import 'dotenv/config';
import { Pool, QueryResult } from 'pg';

@Injectable()
export class DbService {
  private async createConnection(): Promise<Pool> {
    return new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });
  }

  public async query<T>(
    queryString: string,
    data: Array<T>,
  ): Promise<QueryResult> {
    const connection = await this.createConnection();
    const result = await connection.query(queryString, data);
    console.log(queryString, data);
    await connection.end();
    return result;
  }
}
