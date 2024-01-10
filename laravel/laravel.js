
import { sleep } from 'k6';
import http from 'k6/http';

export default function () {

    const url = `https://officer-gateway-dev.cap.lcpare.com/api/officers-guest/officers/sign-in`;

    const data = {
        email: 'dev@languagecenter.id',
        password: 'officerlc',
        token_fcm: 'eMmpTeJoSSuW30dGUTnaSF:APA91bEYgfM2JEdlc4XmXJ1-mWv-ID7g08G5bVMHJa6NeJxLDPX-eofvn9tdLA3zX3FG4zaNtA37iIbbsS3Vyvv2PmjngdUsb7JL0mdKcbF6IpjCYdrtUI1cVHjG6oIUppmeoEw8OFwE'
    }

    const payload = JSON.stringify({ email: data.email, password: data.password, token_fcm: data.token_fcm });

    const headers = { 'Content-Type': 'application/json' };

    const response = http.post(url, payload, { headers });

    console.log(response.body);
    
}

