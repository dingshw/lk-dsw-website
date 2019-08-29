// // 将scss里面的，px，转换为vw
const fs = require('fs')
const path = require('path')

function tran(s) {
  let arr = s.match(/[0-9.]+(px)/g) || []
  arr.sort((a, b) => b.length - a.length)
  for(let i of arr){
    let num = i.replace('px', '') * 1
    num /= 3.75
    let reg = new RegExp(i, 'g')
    s = s.replace(reg, num + 'vw')
  }
  return s
};

export default function () {
  let hasDealJsList = []

  this.nuxt.hook('generate:page', ({path, html}) => {
    if(path.includes('/m/')){
      let jsArr = html.match(/<script .+?\/script>/g)
      hasDealJsList = [...hasDealJsList, ...jsArr]
    }
  })
  
  this.nuxt.hook('generate:routeCreated', ({path}) => {
    if(path.includes('/m/')){
      console.log('开始转换vw')
      let s = fs.readFileSync(path, 'utf-8');
      fs.writeFileSync(path, tran(s));
    }
  })
  this.nuxt.hook('generate:done', () => {
    console.log('界面生成完啦，最后处理JS里面的px')
    hasDealJsList = [...new Set(hasDealJsList)].filter(i => i.includes('_nuxt'))
    for(let i of hasDealJsList){
      let p = i.substring(i.indexOf('src="') + 5, i.lastIndexOf('.js') + 3)
      let fullPath = path.resolve('./dist' + p)
      let s = fs.readFileSync(fullPath, 'utf-8');
      fs.writeFileSync(fullPath, tran(s));
    }
    console.log('JS里面的也处理完了，都鼓捣好了')
  })
}