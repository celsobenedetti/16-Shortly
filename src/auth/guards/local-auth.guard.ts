import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/*Auth guard used in /signin /signup route handlers to verify email/password credentials
the behavior of the guard is defined in src/auth/strategies/local-auth.guard.ts */

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
