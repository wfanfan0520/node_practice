const {resolve} = require('path')
const fs = require('fs')
module.exports.getRouter = (path = resolve('./')) => {
    // 暗号：递归
    const list = fs.readdirSync(path)
        .map(v => ({
            name: v.replace('.vue', '').toLowerCase(),
            file: v
        }))
    let routes = "";
    for (let i in list) {
        const nameKey = list[i].name;
        const fileKey = list[i].file;
        routes += `{
    path: '/${nameKey}',
    name: '${nameKey}',
    component: () => import('./views/${fileKey}')
},
`
    }
    const reslut = `
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
${routes}
    ]
})`
    return reslut
}

