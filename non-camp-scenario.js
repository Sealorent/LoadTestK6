
import { sleep } from 'k6';
import Actions from './actions.js';

export const options = {
  stages: [
    { duration: '1m', target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
    // { duration: '1m', target: 1000 }, // stay at 100 users for 30 minutes
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
    http_reqs: ['count>10'], // throughput should be at least 100 request per second
    // cpu: ['avg<80'], // CPU should be less than 80%
    // memory: ['avg<50'], // Memory should be less than 80%
  },
};


export default function () {
  
  var token =  Actions.login();

  Actions.getProfile(token);

  Actions.dashboard(token);

  var uid_category = Actions.learningVideoMaster(token);

  var uid = Actions.learningVideoCategory(token, uid_category);

  Actions.learningVideoDetail(token, uid);

  Actions.classInfo(token);

  Actions.classCurrent(token);

  Actions.placementTest(token);

  Actions.academicReport(token);

  var uid = Actions.notificationList(token);

  Actions.promotionDetails(token, uid);
  
}