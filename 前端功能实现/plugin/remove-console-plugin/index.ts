interface Plugin {
  name: string
  transform(code: string, id: string): string
}

export default function remove(): any {
  return {
    name: 'remove-console-plugin',
    transform(code: string, id: string) {
      // console.log(code)
      const url = id
      if (url.includes('/src/') && /\.([tj]sx?|js)$/.test(url)) {
        return code + `\n` + '// 一行注释'
      }
      // return code.replace(/console\.(log|info|warn|error)/g, '')
      return code
    },
    load(id: string) {
      
    },
  }
}
