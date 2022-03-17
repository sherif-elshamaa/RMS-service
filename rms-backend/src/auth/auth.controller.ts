import {
  Body,
  Controller,
  HttpCode,
  NotFoundException,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { GetUser } from './get-user.decorator';
import { User } from './schemas/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  @UseGuards(AuthGuard())
  @HttpCode(201)
  async signUp(
    @Body() authCredentialsDto: AuthCredentialsDto,
    @GetUser() user: User,
  ): Promise<void> {
    if (user.role !== 'ADMIN') {
      throw new NotFoundException();
    } else {
      return await this.authService.signUp(authCredentialsDto);
    }
  }

  @Post('/signin')
  async signIn(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return await this.authService.signIn(authCredentialsDto);
  }
}
