import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/*Auth guard used in route handlers to restrict access to requests with jwt in header
the guard behavior and 'Bearer TOKEN' pattern are defined in src/auth/strategies/jwt-auth.guard.ts
JwtModule setup is declared in src/auth/auth.module.ts*/

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
