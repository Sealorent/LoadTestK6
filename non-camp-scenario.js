
import { sleep } from 'k6';
import Actions from './actions.js';

export const options = {
  vus: 3, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
  duration: '1m', // This can be shorter or just a few iterations
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