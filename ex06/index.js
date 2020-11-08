const crypto = require('crypto')
const jsonToken = require("jsonwebtoken");
module.exports.createToken = token => {
    const ary = token.split('.')
    if (ary.length !== 3) {
        return
    }
    // 暗号：贪心算法
    const val = "12345678";
    const options = { secret: "jwt_secret", key: "user" };
    return {
        getExp: () => {
            let decodeVal = jsonToken.decode(token, val, options);
            return decodeVal["exp"];
        },
        verify: key => {
            const hmac = crypto.createHmac('SHA256', key).update(ary[0]+ '.' +  ary[1]).digest('base64');
            return hmac === ary[2] + '='
        }
    }
}
