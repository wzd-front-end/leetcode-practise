const axios = require('axios')
const fs =require('fs')
const url = process.argv[2]
init(url)

async function init (url) {
  try {
    let title = url.match(/problems\/([^/]+)\/?/)[1]
    let res = await fetchData(title)
    let data = res.data.data.question
    
    let fileName = `${data.questionId}-${title}.js`
  
    const fileData = {
      fileName: fileName,
      filePath: `./${data.difficulty.toLowerCase()}/${fileName}`,
      data: {
        title,
        'translatedTitle': data.translatedTitle,
        'translatedContent': formatHtml(data.translatedContent),
        'tagList': getTagName(data.topicTags),
        'code': getCodeSnippets(data.codeSnippets),
        'date': formatDate(Date.now())
      }
    }
    // console.log(fileData)
    generateFile(fileData)
  }catch(e){
    console.log('运行异常：'+ e.message)
  }

}

function fetchData (title){
  return axios.request({
    methods: 'POST',
    url: 'https://leetcode-cn.com/graphql/',
    headers: {
      'origin': 'https://leetcode-cn.com',
      'referer': url
    },
    data: {
      'operationName':'questionData',
      'query':`query questionData($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
          questionId
          questionFrontendId
          boundTopicId
          title
          titleSlug
          content
          translatedTitle
          translatedContent
          isPaidOnly
          difficulty
          likes
          dislikes
          isLiked
          similarQuestions
          contributors {
            username
            profileUrl
            avatarUrl
            __typename
          }
          langToValidPlayground
          topicTags {
            name
            slug
            translatedName
            __typename
          }
          companyTagStats
          codeSnippets {
            lang
            langSlug
            code
            __typename
          }
          stats
          hints
          solution {
            id
            canSeeDetail
            __typename
          }
          status
          sampleTestCase
          metaData
          judgerAvailable
          judgeType
          mysqlSchemas
          enableRunCode
          envInfo
          book {
            id
            bookName
            pressName
            description
            bookImgUrl
            pressImgUrl
            productUrl
            __typename
          }
          isSubscribed
          __typename
        }
      }`,
      'variables': {
        'titleSlug': title
      }
    }
  })
}

function formatHtml(str) { 
  return ' * ' + str
    .replace(/<\/?[0-9a-zA-Z]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&minus;/g, '-')
    .replace(/&times;/g, '×')
    .replace(/&divide;/g, '÷')
    .replace(/\n/g, '\n * ')
}

function getTagName(topicTags) {
  return topicTags.map((item) => {
    return item.translatedName
  }).join('、')
}

function getCodeSnippets(codeSnippets){
  for(var i = 0; i < codeSnippets.length; i++){
    if(codeSnippets[i].lang === 'JavaScript'){
      return codeSnippets[i].code
    }
  }
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

function generateFile(fileData) { 
  if(fs.existsSync(fileData.filePath)){
    return console.log(`路径为'${fileData.filePath}'文件已经存在`)
  }

  let template = fs.readFileSync('./questions.tpl', 'utf-8')
  Object.keys(fileData.data).forEach((key) => {
    template = template.replace(new RegExp('{{'+key+'}}', 'g'), fileData.data[key])
  })

  fs.writeFileSync(fileData.filePath, template, {encoding: 'utf-8'})
  console.log(`${fileData.filePath}文件生成成功`)
}