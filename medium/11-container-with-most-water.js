/**
 * @name 盛最多水的容器
 * @url https://leetcode-cn.com/problems/container-with-most-water/
 * @date 2020-03-27 10:24
 * @tags 数组、双指针
 * description
 * ```
  * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 
 * 说明：你不能倾斜容器，且 n 的值至少为 2。
 * 
 *  
 * 
 * <img alt="" src="https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg" style="height: 287px; width: 600px;">
 * 
 * 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 * 
 *  
 * 
 * 示例：
 * 
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49
 * 
 * ```
 */

/**
 * @param {number[]} height
 * @return {number}
 * 题解：利用双指针，左右同时开工，选取左右或者右边较小得一边，向内靠拢
 */
var maxArea = function(height) {
  let maxarea = 0
  let l = 0
  let r = height.length - 1
  while(l < r) {
    maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l))
    if(height[l] < height[r]){
      l++
    } else {
      r--
    }
  }

  return maxarea
};