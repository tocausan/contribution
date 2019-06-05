const exec = require('child-process-promise').exec;
const path = '/mnt/c/Scripts/contribution';
const contributionFileName = 'contribution.txt';

async function commit() {
    try {
        await exec('cd ' + path)
            .catch((err) => {
                throw err;
            });
        await exec('git pull')
            .catch((err) => {
                throw err;
            });
        await exec('git add . && git commit -m "contribute"')
            .catch((err) => {
                throw err;
            });
        return exec('git push')
            .catch((err) => {
                throw err;
            });
    } catch (e) {
        console.log('err: ' + e);
    }
}

function contribute(amount) {
    return new Promise(async (response, reject) => {
        for (let i = 0; i <= amount; i++) {
            await exec('echo "contribution on ' + (new Date()).getTime().toString() + '" >> ' + contributionFileName)
        }
        return commit();
    });
}

contribute(50)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });