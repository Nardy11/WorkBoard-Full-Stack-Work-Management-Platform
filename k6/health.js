import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  scenarios: {
    health_check: {
      executor: 'constant-arrival-rate',
      rate: 10,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 2,
      maxVUs: 10,
    },
  },
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<500'],
  },
};

export default function () {
  const response = http.get('http://localhost:3001/api/health');
  check(response, { 'health endpoint returns 200': (r) => r.status === 200 });
  sleep(1);
}
