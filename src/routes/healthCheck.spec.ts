import Application from '../application';
import chai from 'chai';
import chaiHttp  from 'chai-http';
import 'mocha';
chai.use(chaiHttp);

describe('HealthCheck request', () => {
  it('GET /healthcheck should return health message', async () => {
    const app = Application();
    return chai
      .request(app)
      .get('/healthcheck')
        .then((res) => {
        chai.expect(res.status).to.eql(200);
      });
  });
});
