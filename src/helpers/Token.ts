import { sign, verify } from 'jsonwebtoken';
import config from '../config/index';

export class Token {
  userId: string;
  constructor(userId: string) {
    this.userId = userId;
  }
  static userTokenFromJwt(jwt: string): Token {
    const tokenData = <{ sub: string }>verify(jwt, config.server.jwtSecret, {
      algorithms: ['HS256'],
      issuer: config.server.jwtIssuer
    });
    return new Token(tokenData.sub);
  }

  static verifyJwt(jwt: string): void {
    try {
      verify(jwt, config.server.jwtSecret, {
        algorithms: ['HS256'],
        issuer: config.server.jwtIssuer
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  getToken(): string {
    const { jwtSecret, jwtIssuer } = config.server;
    return sign({}, jwtSecret, {
      algorithm: 'HS256',
      expiresIn: '7d',
      subject: this.userId,
      issuer: jwtIssuer
    });
  }
}
