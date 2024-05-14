var addConfig = require('./addConfig')
var fs = require('fs')
var path = require('path')
var shell = require('shelljs')
const { Project, SyntaxKind, QuoteKind, VariableDeclarationKind } = require('ts-morph')
shell.echo('>>>>>>')
shell.echo('开始新建页面')
addConfig.forEach((ele) => {
  if (ele.open) {
    buildPage(ele)
  }
})

function buildPage(config) {
  var paths = path.resolve(`./src/views/${config.filePath}`)
  shell.echo('页面地址:' + paths)
  mkdirSync(paths, function () {
    var str = ''
    if (config.helloworld) {
      // 新建空白页，读取空白页模版
      str = handleStr(
        readF(path.resolve('./auto-build-page/template-hello-word.vue')),
        config
      )
    } else {
      str = handleStr(
        readF(path.resolve('./auto-build-page/template-table.vue')),
        config
      )
    }
    // 写入文件
    writeF(paths + '/index.vue', str)
    // shell.echo('开始新增路由……')
    addRou(`./views/${config.filePath}/${config.name}`, config)
  })
}



function mkdirSync(path, callback) {

  try {
    // Check if directory does not exist
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path)
    }
  }
  catch (err) {
    console.error(err)
  }
  callback()
}

function handleStr(str, config) {
  if (config.helloworld) {
    return str
  }
  str = str.replace('%title%', config.desc)
  str = str.replace('%method%', config.getlist.method)
  str = str.replace('%geturl%', config.getlist.url)
  return str
}


function readF(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8')
    return data
  } catch (err) {
    console.error(err)
    return null
  }
}


function writeF(filePath, content) {
  try {
    fs.writeFileSync(filePath, content)
    console.log('File written successfully')
  } catch (err) {
    console.error(err)
  }
}


function addRou(paths, config) {
  // Create a new TypeScript project
  const project = new Project()

  // Add the router.config.ts file to the project
  const routerConfigPath = './src/router/router.config.ts'
  const routerConfigFile = project.addSourceFileAtPath(routerConfigPath)

  // Get the myRouter array
  const myRouter = routerConfigFile.getVariableDeclarationOrThrow('myRouter')
  const myRouterArray = myRouter.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression)

  let importUrl = replaceAt(paths, 0, "@")
  // Create a new route
  const newRoute = `{
    path: "${config.routerPath}",
    name: "${config.name}",
    component: () => import("${ importUrl }"),
    meta: {
      title: "${config.name}"
    }
  },`
  // Add the new route to the myRouter array
  myRouterArray.addElement(newRoute)

  // Save the changes
  routerConfigFile.saveSync()
}


function replaceAt(string, index, replacement) {
  return string.substr(0, index) + replacement + string.substr(index + 1)
}