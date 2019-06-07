const exec = require('child-process-promise').exec;
const path = '/mnt/c/Scripts/contribution';
const contributionFileName = 'contribution/test';

async function commit() {
    await exec('cd ' + path)
        .catch((err) => {
            throw err;
        });
    await exec('git pull')
        .catch((err) => {
            throw err;
        });
    await exec('git add . && git commit -m "contribution on ' + (new Date()).getTime().toString() + '"')
        .catch((err) => {
            throw err;
        });
    return exec('git push')
        .catch((err) => {
            throw err;
        });
}

function contribute(amount) {
    return new Promise(async (response, reject) => {
        for (let i = 0; i <= amount; i++) {
           /*
            await exec('echo "contribution on ' + (new Date()).getTime().toString() + '" >> ' + contributionFileName + '-' + (new Date()).getTime().toString() + '.txt')
                .catch((err) => {
                    reject(err);
                });
                
            */
            await exec('echo "function hello(){console.log(\"hello\"}" >> ' + contributionFileName + '-' + (new Date()).getTime().toString() + '.js')
                .catch((err) => {
                    reject(err);
                });
            await commit()
                .catch((err) => {
                    reject(err);
                });
        }
    });
}

contribute(5)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });