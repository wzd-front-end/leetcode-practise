/**
 * @name Z 字形变换
 * @url https://leetcode-cn.com/problems/zigzag-conversion/
 * @date 2020-03-11 14:27
 * @tags 字符串
 * description
 * ```
  * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 * 
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 * 
 * 
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 * 
 * 请你实现这个将字符串进行指定行数变换的函数：
 * 
 * string convert(string s, int numRows);
 * 
 * 示例 1:
 * 
 * 输入: s = "LEETCODEISHIRING", numRows = 3
 * 输出: "LCIRETOESIIGEDHN"
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "LEETCODEISHIRING", numRows = 4
 * 输出: "LDREOEIIECIHNTSG"
 * 解释:
 * 
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 * 
 * ```
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * 88ms  96.5%
 * 37.8MB  96.8%
 */

var convert = function(s, numRows) {
  if(numRows === 1) return s
  if(s.length <= numRows) return s

  let list = []

  for(let i = 0; i < numRows;i++) { 
    list.push('')
  }

  let curRow = 0
  let goingDown = false

  for(let chat of s){
    list[curRow] += chat
    if(curRow === 0 || curRow === (numRows - 1)) goingDown = !goingDown
    curRow += goingDown ? 1 : -1
  }

  return list.join('')
}


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * 虽然能得出答案，效率低下，忽略了字符串本身可直接做追加存储，且结果不要求输出空的位置，所以只需要确定再哪个行进行追加即可
 * 176ms
 * 50.3MB
 */

var converts = function(s, numRows) {
  if(numRows <= 1) return s
 

  let list = []
  
  for(let i = 0; i < numRows;i++) { 
    list.push([])
  }

  let x = 0
  let y = 0
  let direction = 0 // 0向下，1向上
  let result = ''
  for(let i = 0, len = s.length; i < len; i++) {
    if(y === 0){
      direction = 0
    } else if(y === (numRows - 1)){
      direction = 1
    }
    if(direction === 0){
      list[y++][x] = s[i]
    } else {
      list[y--][x++] = s[i]
    }
  }
  list.forEach(item => {
    result += item.join('')
  })
 
  return result
};

// console.log(convert('PAYPALISHIRING', 3))
