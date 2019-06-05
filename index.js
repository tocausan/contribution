var exec = require('child-process-promise').exec;

function contribute(timeout){
    return new Promise((response, reject) => {
        setTimeout(() => {
                exec('echo contribution >> contribution.txt')
            .then((res) => {
                exec('cd /mnt/c/Scripts/contribution && git pull && git add . && git commit -m "add contribution" && git push')
                .then((res) => {
                    response({
                        stdout: res.stdout,
                        stderr: res.stderr   
                    });
                })
                .catch((err) => {
                    reject(err);
                });
            })
            .catch((err) => {
                reject(err);
            });
        }, timeout);
    })
}



for(let i = 1; i <= 10; i++){
    contribute(i * 1000)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
}