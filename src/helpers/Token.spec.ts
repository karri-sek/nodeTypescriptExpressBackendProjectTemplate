import { Token } from './Token';
import 'mocha';
import { decode, JsonWebTokenError } from 'jsonwebtoken';
import { expect } from 'chai';
import { JWTDecodeResponse } from '../types';
describe('Token', () => {
  // pass the userId to generate Token, every user has different token
  const token = new Token('woodpecker');
  const validJwt = token.getToken();

  describe('#getToken', () => {
    it('should able to generate a token using jwt', () => {
      expect(token.getToken()).to.have.lengthOf.above(1);
    });
  });
  describe('#userTokenFromJwt', () => {
    it('returns an instance of token', () => {
      expect(Token.userTokenFromJwt(validJwt)).instanceOf(Token);
    });
    it('has a valid User Id', () => {
      expect(Token.userTokenFromJwt(validJwt).userId).equal('woodpecker');
    });
  });
  describe('#verifyJwt', () => {
    it('successfully verify jwt with valid token', () => {
      expect(Token.verifyJwt(validJwt)).undefined;
    });
    it('invalid jwt throws an error', () => {
      expect(() => Token.userTokenFromJwt('invalid')).throws(JsonWebTokenError);
    });
  });

  describe('#jwt', () => {
    describe('decoded token', () => {
      const decoded = <JWTDecodeResponse>(
        decode(validJwt, { json: true, complete: true })
      );
      it('has an exipry time of 7 days', () => {
        const sevenDaysInSeconds = 60 * 60 * 24 * 7;
        expect(decoded.payload.exp - decoded.payload.iat).equal(
          sevenDaysInSeconds
        );
      });
      it('has an issue of woodpecker', () => {
        expect(decoded.payload.iss).equal('woodpecker');
      });
      it('has a subject of 1', () => {
        expect(decoded.payload.sub).equal('woodpecker');
      });
    });
  });
});
