import { HealthController } from './health.controller';

describe('HealthController', () => {
  it('returns an ok status', () => {
    const result = new HealthController().health();
    expect(result.status).toBe('ok');
    expect(result.service).toBe('workboard-api');
  });
});
