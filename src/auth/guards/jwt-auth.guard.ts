import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/*Auth guard used in route handlers to restrict access to requests with jwt in header
the 'Bearer TOKEN' pattern is defined in src/auth/strategies/jwt-auth.guard.ts */

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
