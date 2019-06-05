var exec = require('child-process-promise').exec;

function contribute(filename){
    return new Promise((response, reject) => {
        exec('touch ' +filename + 'txt && echo contribution >> ' + filename + '.txt')
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
    })
}

for(let i = 0; i < 20; i++){
    setTimeout(() => {
        contribute(i);        
    }, 1000);
}