const fs = require('fs')
module.exports.parser = path => {
    const readStream = fs.createReadStream(path)
    let reqData = [];
    let size = 0;
    // 暗号：二分查找
    return new Promise(resolve => {
        readStream.on('data', data => {
            reqData.push(data);
            size += data.length;
        });
        readStream.on('end', function () {
            const data = Buffer.concat(reqData, size);
            resolve(JSON.parse(data.toString()));
        });
    })
}
