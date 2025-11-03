// 导入自定义的 mytools 包
const mt = require('mytools');

// 1. 测试日期格式化
const dt = new Date();
const formattedDate = mt.dateFormat(dt);
console.log('格式化后的日期:', formattedDate);
// 示例输出: 格式化后的日期: 2025-11-03 08:30:00 (根据当前时间变化)

// 2. 测试 HTML 转义
const htmlStr = '<h1>这是标题</h1>，<p>包含双引号"的内容</p>，并且有 & 符号';
const escapedStr = mt.htmlEscape(htmlStr);
console.log('\n转义前:', htmlStr);
console.log('转义后:', escapedStr);
// 输出: &lt;h1&gt;这是标题&lt;/h1&gt;，&lt;p&gt;包含双引号&quot;的内容&lt;/p&gt;，并且有 &amp; 符号

// 3. 测试 HTML 还原
const unescapedStr = mt.htmlUnEscape(escapedStr);
console.log('\n还原后:', unescapedStr);
// 输出: <h1>这是标题</h1>，<p>包含双引号"的内容</p>，并且有 & 符号
