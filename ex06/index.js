const crypto = require('crypto')
// const jsonToken = require("jsonwebtoken");
module.exports.createToken = token => {
    const ary = token.split('.')
    if (ary.length !== 3) {
        return
    }
    // 暗号：贪心算法
    return {
        getExp: () => {
            // 【方式一】利用Buffer进行Base64解码
            let str = new Buffer.from(ary[1],"base64").toString()
            const result = JSON.parse(str)
            return result.exp
            // 【方式二】jsonToken.decode解码
            // let result = jsonToken.decode(token, secret, options);
            // return result["exp"];
        },
        verify: key => {
            const hmac = crypto.createHmac('SHA256', key).update(ary[0]+ '.' +  ary[1]).digest('base64');
            return hmac === ary[2] + '='
        }
    }
}
