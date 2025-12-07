const https = require('http');

const data = JSON.stringify({
    situation: 'My landlord is evicting me without notice.'
});

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/analyze',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = https.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
        try {
            const json = JSON.parse(body);
            console.log('STATUS:', res.statusCode);
            console.log('ERROR:', json.error);
            console.log('DETAILS:', json.details);
        } catch (e) {
            console.log('RAW BODY:', body);
        }
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.write(data);
req.end();
