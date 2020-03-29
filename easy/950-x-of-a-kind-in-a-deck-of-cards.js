/**
 * @name 卡牌分组
 * @url https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
 * @date 2020-03-27 09:29
 * @tags 数组、数学
 * description
 * ```
  * 给定一副牌，每张牌上都写着一个整数。
 * 
 * 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
 * 
 * 
 * 	每组都有 X 张牌。
 * 	组内所有的牌上都写着相同的整数。
 * 
 * 
 * 仅当你可选的 X >= 2 时返回 true。
 * 
 *  
 * 
 * 示例 1：
 * 
 * 输入：[1,2,3,4,4,3,2,1]
 * 输出：true
 * 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
 * 
 * 
 * 示例 2：
 * 
 * 输入：[1,1,1,2,2,2,3,3]
 * 输出：false
 * 解释：没有满足要求的分组。
 * 
 * 
 * 示例 3：
 * 
 * 输入：[1]
 * 输出：false
 * 解释：没有满足要求的分组。
 * 
 * 
 * 示例 4：
 * 
 * 输入：[1,1]
 * 输出：true
 * 解释：可行的分组是 [1,1]
 * 
 * 
 * 示例 5：
 * 
 * 输入：[1,1,2,2,2,2]
 * 输出：true
 * 解释：可行的分组是 [1,1]，[2,2]，[2,2]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 	1 <= deck.length <= 10000
 * 	0 <= deck[i] < 10000
 * 
 * 
 *  
 * 
 * ```
 */

/**
 * @param {number[]} deck
 * @return {boolean}
 * 
 * 76ms  62.79%
 * 36.4MB  57.63%
 */
var hasGroupsSizeX = function(deck) {
  let count = {}

  function gcd(a, b){
    let temp
    while(b !== 0){
      temp = a % b
      a = b
      b = temp
    }
    return a
  }

  for(let val of deck){
    if(count[val] !== undefined) {
      count[val] = count[val] + 1
    } else {
      count[val] = 1
    }
  }

  let g = -1
  for(let key in count){
    if(g === -1){
      g = count[key]
    } else {
      g = gcd(count[key], g)
    }
  }

  return g >= 2
};