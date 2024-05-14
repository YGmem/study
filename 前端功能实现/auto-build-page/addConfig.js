/* 配置这里后运行 npm run bpage 即可 */

var addConfig = [
  // {
  //   // 测试生成表格页
  //   open: true, // 参与生成 false表示改配置不参与生成页面
  //   helloworld: false, // 是否是空白页
  //   desc: '自动生成表格页', // 表格页的 页面描述
  //   filePath: 'xx/xx', // 生成文件的路径 最前面不要 /
  //   name: 'autoTablepage', // 生成页面的名称
  //   getlist: {
  //     // 表格数据请求相关
  //     method: 'GET',
  //     url: 'http://test.req/getlist',
  //   },
  // },
  {
    open: true,
    helloworld: true,
    routerPath: "/functionBtn",
    filePath: '/函数式组件封装按钮',
    name: '函数式组件封装',
  },
]

module.exports = addConfig