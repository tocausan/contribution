var exec = require('child-process-promise').exec;

exec('cd /mnt/c/Scripts/contribution && git pull && git add . && git commit -m "add contribution" && git push')
    .then((res) => {
        console.log(res.stdout);
        console.log(res.stderr);
    })
    .catch((err) => {
        console.error('ERROR: ', err);
    });