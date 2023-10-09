import http, { get } from 'k6/http';
import { check } from 'k6';
import { baseUrlLogin, baseUrl } from './const.js';
import urlApi from './url.js';


class Scenario {

    constructor() {
        this.token = ''; 
    }

    getToken(){
        return this.token.split(" ")[1];
    }

    login() {
        const url = `${baseUrlLogin}`;

        const data = {
            email: 'kayyisaljund@gmail.com',
            password: 'memberlc',
            token_fcm: 'eMmpTeJoSSuW30dGUTnaSF:APA91bEYgfM2JEdlc4XmXJ1-mWv-ID7g08G5bVMHJa6NeJxLDPX-eofvn9tdLA3zX3FG4zaNtA37iIbbsS3Vyvv2PmjngdUsb7JL0mdKcbF6IpjCYdrtUI1cVHjG6oIUppmeoEw8OFwE'
        }

        const payload = JSON.stringify({ email: data.email, password: data.password, token_fcm: data.token_fcm });

        const headers = { 'Content-Type': 'application/json' };

        const response = http.post(url, payload, { headers });

        this.token = JSON.parse(response.body).message.token;


        check(response, { 'status is 200': (r) => r.status === 200 });

    }

    courseBranch() {

        const url = `${urlApi.courseOffline}`;

        const headers = { 'Authorization': `Bearer ${this.token}` };
        
        const response = http.get(url, { headers });

        check(response, { 'status is 200': (r) => r.status === 200 });

        
    }
}

export default new Scenario();



