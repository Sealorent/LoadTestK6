
// path : member
import { baseUrl } from './const.js';

class urlApi {
    constructor() {
        this.courseOffline = `${baseUrl}/course/offline/branch`;
    }
}

export default new urlApi();