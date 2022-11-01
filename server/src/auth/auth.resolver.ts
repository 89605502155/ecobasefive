import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { SignUpInput } from './dto/signup-input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { SignResponse } from './dto/sign-response';
import { SignInInput } from './dto/signin-input';
import { LogoutResponse } from './dto/logout-response';
import { LogoutInput } from './dto/logout-input';
import { Public } from 'src/auth/decorators/public.decorator';
import { NewTokensResponse } from './dto/newTokensResponse';
import { CurrentUserLogin } from './decorators/currentUserLogin.decorator';
import { CurrentUser } from './decorators/currentUser.decorator';
import { UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from './guards/refreshToken.guard';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @Mutation(() => SignResponse)
  signup(@Args('signUpInput') signUpInput: SignUpInput) {
    return this.authService.signup(signUpInput);
  }

  @Public()
  @Mutation(() => SignResponse)
  signin(@Args('signInInput') signInInput: SignInInput) {
    return this.authService.signin(signInInput);
  }

  @Query(() => Auth, { name: 'auth' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.authService.findOne(id);
  }

  @Mutation(() => Auth)
  updateAuth(@Args('updateAuthInput') updateAuthInput: UpdateAuthInput) {
    return this.authService.update(updateAuthInput.id, updateAuthInput);
  }

  @Public()
  @Mutation(() => LogoutResponse)
  logout(@Args('logoutInput') logoutInput: LogoutInput) {
    return this.authService.logout(logoutInput);
  }

  @Public()
  @UseGuards(RefreshTokenGuard)
  @Mutation(()=> NewTokensResponse)
  getNewTokens(
    @CurrentUserLogin()login: string,
    @CurrentUser('refreshToken')refreshToken:string
  ){
    return this.authService.getNewTokens(login,refreshToken);
  }
}
