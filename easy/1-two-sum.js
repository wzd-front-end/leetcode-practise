/**
 * @name 两数之和
 * @url https://leetcode-cn.com/problems/two-sum/
 * @date 2020-03-07 22:04
 * @tags 数组、哈希表
 * description
 * ```
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 * ```
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 题解：利用哈希值，将目标值减去当前值得到补充值，并把补充值作为key，索引值作为valve存放在哈希表中，如果存在对应的元素，则将其取出，
 */
var twoSum = function(nums, target) {
  var hashTable = {}
  for(let i = 0; i < nums.length; i++){
    let complement = target - nums[i]
  
    if(hashTable[complement] !== undefined){
      return [hashTable[complement], i]
    } else{
      hashTable[nums[i]] = i
    }
  }
  return []
};
twoSum([2, 7, 11, 15], 9)