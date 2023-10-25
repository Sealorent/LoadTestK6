import Actions  from './actions.js';

// export const options = {
//   scenarios: {
//     contacts: {
//       executor: 'ramping-arrival-rate',
//       timeUnit: '1s',
//       preAllocatedVUs: 10,
//       maxVUs: 200,
//       stages: [
//         { target: 5, duration: '0s' },
//         { target: 5, duration: '2s' },
//         { target: 15, duration: '0s' },
//         { target: 15, duration: '10s' },
//       ],
//     },
//   },
//   thresholds: {
//     http_req_duration: ['p(95)<60000'], //units in miliseconds 60000ms = 1m 
//     http_req_failed: ['rate<0.01'], // http errors should be less than 1%
//     checks: ["rate>0.99"]
//   },
// };


export default function () {
  
  var token =  Actions.login();

  Actions.dashboard(token);

  var uid_category = Actions.learningVideoCategory(token);

  var uid = Actions.learningVideoDetail(token, uid_category);

  Actions.learningVideoDetail(token, uid);

  Actions.classInfo(token);

  Actions.classCurrent(token);

  Actions.placementTest(token);

  Actions.academicReport(token);
  
}