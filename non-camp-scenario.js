
import { sleep } from 'k6';
import Actions from './actions.js';

const options = {
  // Key configurations for avg load test in this section
  stages: [
    { target: 10 }, // below normal load
    { target: 100, duration: '1m' }, // ramp-up from 10 to 100 users over 1 minute
    { target: 1000, duration: '10m' }, // stay at 1000 users for 9 minutes
    { target: 0, duration: '1m' }, // ramp-down to 0 users over 1 minute
  ],
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