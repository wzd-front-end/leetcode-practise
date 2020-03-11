const fs = require('fs')
const path = require('path')

let subjectInfos = {
  easy: ergodicFiles(path.resolve(__dirname, './easy')),
  medium: ergodicFiles(path.resolve(__dirname, './medium')),
  hard: ergodicFiles(path.resolve(__dirname, './hard'))
}

wirteToReadme([
  {
    tpl: '{{list}}',
    content: generateSubject(subjectInfos)
  },
  {
    tpl: '{{record}}',
    content: generateRecord(subjectInfos)
  }
])

/**
 * 同步遍历所有题目文件，并生成对应的数据结构
 * @params {String} pathStr
 * @return {Object}
 */
function ergodicFiles(pathStr){
  const files = fs.readdirSync(pathStr)
  const result = []

  files.forEach((fileName) => {
    if(fileName.indexOf('.js') < 0) {
      return
    }
    
    let filePath = path.resolve(pathStr, fileName)
    let content = fs.readFileSync(filePath, {encoding: 'utf-8'})
    let stats = fs.statSync(filePath)

    let fileInfos = {
      fileName: fileName,
      url: '',
      name: '',
      tags: [],
      orderNums: fileName.match(/^\d+/)[0],
      fileType: fileName.match(/\.(\w+)$/)[1],
      date: '',
      time: '',
      timeStamp: stats.birthtimeMs,
      level: ''
    }

    if(/@url\s*([^\n]+)/.test(content)) fileInfos.url = RegExp.$1
    if(/@date\s*([^\n]+)/.test(content)) fileInfos.timeStamp = new Date(RegExp.$1).getTime()
    if(/@name\s*([^\n]+)/.test(content)) fileInfos.name = RegExp.$1
    if(/@tags\s*([^\n]+)/.test(content)) fileInfos.tags = RegExp.$1.split('、') 
    let [date, time] = formatDate(fileInfos.timeStamp).split(' ')
    fileInfos.date = date
    fileInfos.time = time

    result.push(fileInfos)
  })
  result.sort((a, b) => a.orderNums - b.orderNums)

  return result
}

function formatDate(dateStr, f = 'yyyy-MM-dd hh:mm') { 
  let weekList = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  let _date = new Date(Number(dateStr))

  let o = {
    'q+': Math.floor((_date.getMonth() + 3) / 3),
    'M+': _date.getMonth() + 1,
    'd+': _date.getDate(),
    'h+': _date.getHours(),
    'm+': _date.getMinutes(),
    's+': _date.getSeconds(),
    'W': weekList[_date.getDay()]
  }
  if(/(y+)/.test(f)){
    f = f.replace(
      RegExp.$1, 
      (_date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for(var k in o){
    if(new RegExp('(' + k + ')').test(f)) {
      f = f.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? o[k]
          : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }

  return f
}

function generateSubject(subjectInfos) {
  let content = ''
  let count = 0
  const levelMap = {
    'easy': '简单',
    'medium': '中等',
    'hard': '困难'
  }

  Object.keys(subjectInfos).forEach((level) => {
    count += subjectInfos[level].length
    
    content += `\n**${levelMap[level]}(${level})**[${subjectInfos[level].length}]\n`
    subjectInfos[level].forEach((s) => {
      content += 
      `- ${s.orderNums}.${s.name} ${s.tags.length > 0 ? `【${s.tags.join('|')}】` : ''}——[查看代码](https://github.com/wzd-front-end/leetcode-practise/blob/master/${level}/${s.fileName}) [查看原题](${s.url})\n`
    })
  })
  content = `已刷题目总数：${count}\n${content}`
  return content
}

function generateRecord(subjectInfos) {
  let content = ''
  let dataObj = {}

  Object.keys(subjectInfos).forEach((level) => {
    subjectInfos[level].forEach((subject) => {
      let dataTimeTemp = new Date(subject.date).getTime()
      subject.level = level
      if(dataObj[dataTimeTemp]){
        dataObj[dataTimeTemp].push(subject)
      } else {
        dataObj[dataTimeTemp] = [subject]
      }
    })
  })

  let dataObjKeys = Object.keys(dataObj);
  dataObjKeys.sort((a, b) => b - a)

  dataObjKeys.forEach((key) => {
    content += `\n### ${dataObj[key][0].date}【题目数：${dataObj[key].length}】\n\n`

    dataObj[key].sort((a, b) => a.timeStamp - b.timeStamp)
    dataObj[key].forEach((s, index) => {
      content += `${index + 1}.${s.time}——[${s.orderNums}.${s.name}](https://github.com/wzd-front-end/leetcode-practise/blob/master/${s.level}/${s.fileName})(${s.level})\n\n`
    })
  })
  return content
}

function wirteToReadme(rules = []) { 
  let template = fs.readFileSync(path.resolve(__dirname, './README.tpl'), {encoding: 'utf-8'})
  rules.forEach(rule => {
    template = template.replace(rule.tpl, rule.content)
  })
  fs.writeFileSync(path.resolve(__dirname, './README.md'), template, {encoding: 'utf-8'})
  console.log('README.md已更新')
}