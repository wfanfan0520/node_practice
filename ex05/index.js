const {EventEmitter} = require('events')
module.exports = class Connection {
    //暗号：冒泡排序
    constructor() {
        this.event = new EventEmitter();
    }
    onConn(fn) {
        this.event.on('connection', fn); //订阅：执行回调
    }
    connection(arg) {
        this.event.emit('connection', arg); //发布：监听传string
    }
}
