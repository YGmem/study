let fs = require('fs')

let javaEntityFileName = fs.readdirSync('../javaEntiry', 'utf-8')
javaEntityFileName.forEach(fileName => {
  let javaEntity = fs.readFileSync('../javaEntiry/' + fileName, 'utf-8')

  entityFileToInterfaceFile(javaEntity, fileName)
})



/**
 * @description: 将java文件实体类文件转为interface文件
 * @param {*} javaEntity java实体类内容
 * @param {*} fileName 文件名
 */
function entityFileToInterfaceFile(javaEntity, fileName) {

  let interfaceContent = convertJavaEntityToTSInterface(javaEntity)

  console.log(interfaceContent)
  fileName = fileName.split('.')[0] + '.ts'
  let path = '../src/interface/' + fileName

  writeF(path, interfaceContent)

}




/**
 * @description: 将java实体类转化为前端interface
 * @param {*} javaEntity
 */
function convertJavaEntityToTSInterface(javaEntity) {
  let tsInterface = ''
  const lines = javaEntity.split('\n')
  let interfaceName = ''
  let publicClassCount = 0

  for (let line of lines) {
    line = line.trim()

    if (line.startsWith('public class')) {
      if (publicClassCount) {
        tsInterface += '}\n'
      }
      publicClassCount++
      interfaceName = line.split(' ')[2]
      tsInterface += `interface ${interfaceName} {\n`
    } else if (line.startsWith('private')) {
      const parts = line.split(' ')
      const type = parts[1]
      const name = parts[2].replace(';', '')

      let tsType = ''
      if (type.startsWith('List')) {
        const match = type.match(/<([^>]*)>/)
        const genericType = switchType(match[1])
        tsType = `${genericType}[]`
      } else if (type.startsWith('Map')) {
        
        const match = type.match(/<([^>]*)>/)
        console.log( match, type)
        if (match) {
          const [keyType, valueType] = match[1].split(',').map(t => t.trim().toLowerCase())
          console.log(keyType, valueType, match, type)
          tsType = `Record<${switchType(keyType)}, ${switchType(valueType)}>`
        } else {
          tsType = 'Record<any, any>'
        }
      } else {
        tsType = switchType(type)
      }

      tsInterface += `  ${name}: ${tsType};\n`
    }
  }
  tsInterface += '}\n'

  return tsInterface
}


/**
 * @description: 识别java类型
 * @param {*} type
 */
function switchType(type) {
  let tsType
  switch (type) {
    case 'String':
      tsType = 'string'
      break
    case 'int':
    case 'Integer':
    case 'long':
    case 'Long':
    case 'double':
    case 'Double':
    case 'float':
      tsType = 'number'
      break
    case 'boolean':
      tsType = 'boolean'
      break
    case 'Date':
      tsType = 'Date'
      break
    default:
      tsType = 'any' // use the original type if it's not a basic type
  }
  return tsType
}




/**
 * @description: 写入文件
 * @param {*} filePath 地址
 * @param {*} content 内容
 */
function writeF(filePath, content) {
  try {
    fs.writeFileSync(filePath, content)
    console.log('File written successfully')
  } catch (err) {
    console.error(err)
  }
}
