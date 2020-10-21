import 'mocha';
import { expect } from 'chai';
import httpMocks from 'node-mocks-http';
import { authCheck } from './authCheck';
import { Token } from '../helpers/Token';

import { spy } from 'sinon';
const token = new Token('woodpecker');
const req = httpMocks.createRequest({
  method: 'GET',
  url: '/users/42',
  headers: {
    'woodpecker-token': token.getToken()
  }
});
const res = httpMocks.createResponse();

describe('authCheck middleware', () => {
  it('authCheck middleware response should be 200', async () => {
    expect(res._getStatusCode()).equal(200);
  });
  it('should through token invalid exception', async () => {
    req.headers['woodpecker-token'] = 'tiger';
    /*eslint no-empty-function: "off"*/
    authCheck(req, res, spy()).catch((error) => {
      expect(error)
        .to.be.an('error')
        .with.property('message', 'Token validation failed:jwt malformed');
      expect(res._getStatusCode()).equal(403);
    });
  });
});
