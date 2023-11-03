
import { sleep } from 'k6';
import Actions from './actions.js';

export const options = {
  // Key configurations for avg load test in this section
  stages: [
    { duration: '5m', target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
    { duration: '30m', target: 100 }, // stay at 100 users for 30 minutes
    { duration: '5m', target: 0 }, // ramp-down to 0 users
  ],
};

export default function () {
  
  var token =  Actions.login();
  
  sleep(1);

  Actions.getProfile(token);

  sleep(1);

  Actions.dashboard(token);

  sleep(1);

  var uid_category = Actions.learningVideoMaster(token);

  sleep(1);

  var uid = Actions.learningVideoCategory(token, uid_category);

  Actions.learningVideoDetail(token, uid);

  sleep(1);

  Actions.classInfo(token);

  sleep(1);

  Actions.classCurrent(token);

  sleep(1);

  Actions.placementTest(token);

  sleep(1);

  Actions.academicReport(token);

  sleep(1);

  var uid = Actions.notificationList(token);

  Actions.promotionDetails(token, uid);

  sleep(1);
  
}