- json 格式是标准的数据交换
- 前后端开发， /api json格式来交流
- 全栈

- restful 一切皆资源 暴露资源
- 设计良好的URL
  /posts
  /posts/：id
  /comments
  /comments/：id
  /posts/1/comments

HTTP动词

GET  查询
加一条评论   增加一个资源  
POST新增 /comments
DELETE动词  /posts/2
修改 PUT/PATCH
/comments/2 body 苍茫的天涯是我的爱

PUT 把全新的所有的内容， 去替换掉旧的内容
PATCH 只要传递一个要更新的字段，局部

- RESTFUL 考点
  认为一切皆是资源， URL是唯一定位资源的符号， 它有一定的设计原则
  HTTP动词是Web资源的状态转换动词

  操作     SQL方法    HTTP动词
  CREATE   INSERT     POST
  READ     SELECT     GET
  UPDATE   UPDATE     PUT/PATCH
  DELETE   DELETE     DELETE
