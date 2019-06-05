const exec = require('child-process-promise').exec;
const path = '/mnt/c/Scripts/contribution';
const contributionFileName = 'contribution.txt';

async function commit() {
    await exec('cd ' + path);
    await exec('git pull');
    await exec('git add . && git commit -m "contribute"');
    await exec('git push');
}

function contribute(amount) {
    return new Promise(async (response, reject) => {
        for (let i = 0; i <= amount; i++) {
            await exec('echo "contribution on ' + (new Date()).getTime().toString() + '" >> ' + contributionFileName)
        }

       await commit();
    });
}

contribute(5);