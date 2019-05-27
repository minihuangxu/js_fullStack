const htmlStr = '<p><em><strong>ipsum</strong></em></p>'
//正则 replace splice 规则
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
// []: 范围匹配    ^>: 非>    *:贪婪匹配，零次或多次匹配
//^:不在[]内表示从此开始