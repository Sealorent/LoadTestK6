import http, { get } from 'k6/http';
import { check } from 'k6';
import { baseUrlLogin, baseUrl } from './const.js';
import urlApi from './url.js';


class Actions {

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

        let res = JSON.parse(response.body);

        this.token = res.message.token;

        check(response, { 'status is 200': (r) => r.status === 200 });
      
        return this.token;

    }

    dashboard(token){

        const url = `${baseUrl}/dashboard`;

        const headers = { 'Authorization': token };

        const response = http.get(url, { headers });

        check(response, { 'status is 200': (r) => r.status === 200 });

    }

    learningVideoMaster(token){

        const url = `${baseUrl}/learning-video-category/master`;

        const headers = { 'Authorization': token };

        const response = http.get(url, { headers });

        let res = JSON.parse(response.body);
        let uid = res.message[0].uid;

        check(response, { 'status is 200': (r) => r.status === 200 });
        
        return uid;

    }

    learningVideoCategory(token, uid_category){
            
        const url = `${baseUrl}/learning-video/data?category_uid=${uid_category}`;

        const headers = { 'Authorization': token };

        const response = http.get(url, { headers });

        let res = JSON.parse(response.body);
        let uid = res.message.data[0].uid;

        check(response, { 'status is 200': (r) => r.status === 200 });

        return uid;

    }

    learningVideoDetail(token, uid){

        const url = `${baseUrl}/learning-video/details?uid=${uid}`;

        const headers = { 'Authorization': token };

        const response = http.get(url, { headers });

        check(response, { 'status is 200': (r) => r.status === 200 });

    }

    classInfo(token){

        const url = `${baseUrl}/class/info`;

        const headers = { 'Authorization': token };

        const response = http.get(url, { headers });

        check(response, { 'status is 200': (r) => r.status === 200 });
    }

    classCurrent(token){

        const url = `${baseUrl}/class/current`;

        const headers = { 'Authorization': token };

        const response = http.get(url, { headers });

        check(response, { 'status is 200': (r) => r.status === 200 });

    }

    placementTest(token){
        
        const url = `${baseUrl}/placement`;

        const headers = { 'Authorization': token };

        const response = http.get(url, { headers });

        check(response, { 'status is 200': (r) => r.status === 200 });

    }

    academicReport(token){

        const url = `${baseUrl}/academic/report`;

        const headers = { 'Authorization': token };

        const response = http.get(url, { headers });

        check(response, { 'status is 200': (r) => r.status === 200 });
    }

    academicCamp(token){

        const url = `${baseUrl}/academic/camp`;

        const headers = { 'Authorization': token };

        const response = http.get(url, { headers });

        check(response, { 'status is 200': (r) => r.status === 200 });
    }

    courseBranch(token) {

        const url = `${baseUrl}/course/offline/branch`;

        const headers = { 'Authorization': token };

        const response = http.get(url, { headers });

        check(response, { 'status is 200': (r) => r.status === 200 });

    }

    notificationList(token) {

        const url = `${baseUrl}/notification/member/list`;

        const headers = { 'Authorization': token };

        const response = http.get(url, { headers });

        let res = JSON.parse(response.body);
        let uid = res.message[0].uid;

        check(response, { 'status is 200': (r) => r.status === 200 });

        return uid;
    }

    promotionDetails(token, uid) {

        const url = `${baseUrl}/promotion/details?uid=${uid}`;

        const headers = { 'Authorization': token };

        const response = http.get(url, { headers });

        check(response, { 'status is 200': (r) => r.status === 200 });
    }
}

export default new Actions();



