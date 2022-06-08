import { Request } from 'express';

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

export type TokenObject = {
  token: string;
};

export interface ReqWithUser extends Request {
  user: UserModel;
}
