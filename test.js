import Scenario  from './scenario.js';

export default function () {
  
  var res =  Scenario.login();
  
  Scenario.courseBranch(res);

}