import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './Validation';
import { RefreshJwtGuard } from 'src/guards';
import { ProfileAuth } from 'src/decorators/ProfileAtuh.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('login')
  login(@Body() login: LoginDto) {
    return this.service.login(login);
  }

  @Post('register')
  registerGym(@Body() register: RegisterDto) {
    return this.service.register(register);
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  refreshToken(
    @ProfileAuth()
    profile: {
      id: string;
      email: string;
      role: number;
      name: string;
    },
  ) {
    return this.service.refreshTokens(profile);
  }
}
