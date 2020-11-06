const {EventEmitter} = require('events')
module.exports = class Connection {
    //暗号：冒泡排序
    constructor() {
        this.event = new EventEmitter();
    }
    onConn(fn) {
        this.event.on('connection', fn); //订阅：执行回调
        // on(event, listener)
        // 为指定event事件注册一个监听器（入参：事件名，回调）
    }
    connection(arg) {
        this.event.emit('connection', arg); //发布：监听传string
        // emit(event, [arg1], [arg2], [...])
        // 按监听器的顺序执行每个监听器，node打印arg
    }
}
