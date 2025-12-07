const { exec } = require('child_process');
const fs = require('fs');

exec('npm run build', (error, stdout, stderr) => {
    const log = `STDOUT:\n${stdout}\n\nSTDERR:\n${stderr}`;
    fs.writeFileSync('build_log.txt', log);
    if (error) {
        console.log('Build failed');
    } else {
        console.log('Build passed');
    }
});
