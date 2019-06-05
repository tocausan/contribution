const exec = require('child-process-promise').exec;
const path = '/mnt/c/Scripts/contribution';
const contributionFileName = 'contribution.txt';

async function commit() {
    try {
        await exec('cd ' + path);
        await exec('git pull');
        await exec('git add . && git commit -m "contribute"');
        return exec('git push')
            .then((res) => console.log(res.stderr))
    } catch (e) {
        console.log(e);
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

contribute(5)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });