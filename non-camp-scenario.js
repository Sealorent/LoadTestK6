
import Actions  from './actions.js';

export const options = {
  stages: [
    { duration: '5m', target: 80 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
    { duration: '10m', target: 100 }, // stay at 100 users for 30 minutes
    { duration: '5m', target: 20 },
  ],
  thresholds: {
    http_req_duration: ["p(99)<100"],
  },
};

export default function () {
  
  var token =  Actions.login();

  Actions.dashboard(token);

  var uid_category = Actions.learningVideoMaster(token);

  var uid = Actions.learningVideoCategory(token, uid_category);

  Actions.learningVideoDetail(token, uid);

  Actions.classInfo(token);

  Actions.classCurrent(token);

  Actions.placementTest(token);

  Actions.academicReport(token);
  
}