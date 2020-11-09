const crypto = require('crypto')
const jsonToken = require("jsonwebtoken");
module.exports.createToken = token => {
    const ary = token.split('.')
    if (ary.length !== 3) {
        return
    }
    // 暗号：贪心算法
    const secret = "12345678";
    const options = { secret: "jwt_secret", key: "user" };
    return {
        getExp: () => {
            let result = jsonToken.decode(token, secret, options);
            return result["exp"];
        },
        verify: key => {
            const hmac = crypto.createHmac('SHA256', key).update(ary[0]+ '.' +  ary[1]).digest('base64');
            return hmac === ary[2] + '='
        }
    }
}
