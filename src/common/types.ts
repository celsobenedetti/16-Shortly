import { Request } from 'express';
import { QueryResult } from 'pg';

export type UserInfo = {
  name: string;
  email: string;
  password: string;
};

type UrlInfo = {
  id: number;
  shortUrl: string;
  url: string;
  visitCount: number;
};

export type UserUrlInfo = {
  id: number;
  name: string;
  visitCount: number;
  shortenedUrls: UrlInfo[];
};

type UserRank = {
  id: number;
  name: string;
  linksCount: number;
  visitCount: number;
};

export type RankingResult = UserRank[];

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
