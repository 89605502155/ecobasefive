import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpInput } from './dto/signup-input';
import { UpdateAuthInput } from './dto/update-auth.input';
import * as argon from 'argon2';
import { SignInInput } from './dto/signin-input';
import { LogoutInput } from './dto/logout-input';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ){}
  async signup(signUpInput: SignUpInput) {
    const hashedPassword=await argon.hash(signUpInput.password);
    const user=await this.prisma.user.create({
      data:{
        name:signUpInput.name,
        email: signUpInput.email,
        login:signUpInput.login,
        hashedPassword:hashedPassword,
        university:signUpInput.university,
        surname:signUpInput.surname,
        country:signUpInput.country,
      }
    })
    const {accessToken, refreshToken}= await this.createToken(
      user.login,user.email);
    await this.updateRefreshToken(user.login,refreshToken);
    return {accessToken, refreshToken, user};
  }

  async signin(signInInput:SignInInput) {
    const user = await this.prisma.user.findUnique({where:{
      login:signInInput.login
    }});
    if(!user){
      throw new ForbiddenException('Access Denied');
    }
    const doPasswordMatch = await argon.verify(user.hashedPassword,signInInput.password);
    if(!doPasswordMatch){
      throw new ForbiddenException('Access Denied');
    }
    const {accessToken, refreshToken}= await this.createToken(
      user.login,user.email);
    await this.updateRefreshToken(user.login,refreshToken);
    return {accessToken, refreshToken, user};
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthInput: UpdateAuthInput) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async createToken(login: string, email: string){
    const accessToken = this.jwtService.sign({
      login,
      email
    },{expiresIn:'10s',secret:this.configService.get('ACCESS_TOKEN_SECRET')});
    const refreshToken=this.jwtService.sign({
      login,
      email,
      accessToken
    },{expiresIn:'1d',secret:this.configService.get('REFRESH_TOKEN_SECRET')});
    return {accessToken, refreshToken};
  }

  async updateRefreshToken(loginIn: string, refreshToken: string){
    const hashedRefreshToken = await argon.hash(refreshToken);
    await this.prisma.user.update({
      where:{
        login:loginIn
      },data:{
        hashedRefreshToken
      }
    })
  }
  async logout(logoutInput: LogoutInput){
    await this.prisma.user.updateMany({
      where:{
        login:logoutInput.login,
        hashedRefreshToken:{not:null}
      },data:{
        hashedRefreshToken:null
      }
    });
    return {loggedOut: true};
  }

  async getNewTokens(loginIn: string, rt:string){
    const user = await this.prisma.user.findUnique({
      where:{
        login: loginIn
      }
    });
    if(!user){
      throw new ForbiddenException('Access Denied');
    }
    const dorefreshTokensMatch = await argon.verify(
      user.hashedRefreshToken,
      rt
    );
    if(!dorefreshTokensMatch){
      throw new ForbiddenException('Access Denied');
    }
    const {accessToken, refreshToken}= await this.createToken(
      user.login,user.email);
    await this.updateRefreshToken(user.login,refreshToken);
    return {accessToken, refreshToken, user};
  }
}
