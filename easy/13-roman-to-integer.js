/**
 * @name 罗马数字转整数
 * @url https://leetcode-cn.com/problems/roman-to-integer/
 * @date 2020-03-24 10:06
 * @tags 数学、字符串
 * description
 * ```
  * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
 * 
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
 * 
 * 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
 * 
 * 
 * 	I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * 	X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 * 	C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 * 
 * 
 * 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
 * 
 * 示例 1:
 * 
 * 输入: "III"
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: "IV"
 * 输出: 4
 * 
 * 示例 3:
 * 
 * 输入: "IX"
 * 输出: 9
 * 
 * 示例 4:
 * 
 * 输入: "LVIII"
 * 输出: 58
 * 解释: L = 50, V= 5, III = 3.
 * 
 * 
 * 示例 5:
 * 
 * 输入: "MCMXCIV"
 * 输出: 1994
 * 解释: M = 1000, CM = 900, XC = 90, IV = 4.
 * 
 * ```
 */

/**
 * @param {string} s
 * @return {number}
 * 题解：首先需要准备好枚举值，注意一点是，拼接数字需要多减去一次前面字符的值，这样再遍历的时候，可以先加一边，后面判断复合字符是否存在
 * 枚举值中，存在则加上复合值，不存在则加上当前值
 * 156ms  86.04%
 * 40MB  77.95%
 */
var romanToInt = function(s) {
  let source = {
    'I': 1,
    'IV': 3,
    'V': 5,
    'IX': 8,
    'X': 10,
    'XL': 30,
    'L': 50,
    'XC': 80,
    'C': 100,
    'CD': 300,
    'D': 500,
    'CM': 800,
    'M': 1000
  }
  let sum = source[s.substr(0, 1)]

  for(let i = 1, len = s.length; i < len; i++){
    let two = s.substr(i - 1, 2)
    let one = s.substr(i, 1)
    sum += source[two] ? source[two] : source[one]
  }

  return sum
};
