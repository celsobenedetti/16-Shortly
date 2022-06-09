import { Request } from 'express';
import { QueryResult } from 'pg';

export type UserInfo = {
  name: string;
  email: string;
  password: string;
};

export type UserModel = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export interface IUrlResult {
  id: number;
  shortUrl: string;
  url: string;
}

export type TokenObject = {
  token: string;
};

export type ShortUrlObj = {
  shortUrl: string;
};

export interface UrlModel extends QueryResult {
  id: number;
  shortUrl: string;
  url: string;
  visitCount: number;
  userId: number;
  createdAt: Date;
}

export interface ReqWithUser extends Request {
  user: UserModel;
}
