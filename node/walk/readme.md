- readdir
    读目录里面的内容 IO操作异步
    readdirSync Async 异步 Sync 同步

    JS单线程的，用回调或Promise， 释放线程的控制权，主要因为JS在早期是前端DOM的编程， 用户交互比较多，再通过event-loop机制，拿回控制权（callback resolve） 来到了node，js 获取了服务器端的能力，
    readdirSync()