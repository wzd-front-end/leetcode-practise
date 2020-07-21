/**
 * @name 旋转矩阵
 * @url https://leetcode-cn.com/problems/rotate-matrix-lcci/
 * @date 2020-04-06 09:48
 * @tags 数组
 * description
 * ```
 * 给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。
 *
 * 不占用额外内存空间能否做到？
 *
 *
 *
 * 示例 1:
 *
 * 给定 matrix =
 * [
 *   [1,2,3],
 *   [4,5,6],
 *   [7,8,9]
 * ],
 *
 * 原地旋转输入矩阵，使其变为:
 * [
 *   [7,4,1],
 *   [8,5,2],
 *   [9,6,3]
 * ]
 *
 *
 * 示例 2:
 *
 * 给定 matrix =
 * [
 *   [ 5, 1, 9,11],
 *   [ 2, 4, 8,10],
 *   [13, 3, 6, 7],
 *   [15,14,12,16]
 * ],
 *
 * 原地旋转输入矩阵，使其变为:
 * [
 *   [15,13, 2, 5],
 *   [14, 3, 4, 1],
 *   [12, 6, 8, 9],
 *   [16, 7,10,11]
 * ]
 *
 *
 * ```
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * matrix[row][col] = matrix[n - col - 1][row]
 * 题解：先做水平方向翻转，再做左上角到右下角的对角线翻转
 *
 * 64ms  78.07%
 * 34MB  100.0%
 */
var rotate = function (matrix) {
  let n = matrix.length

  // 先做翻转
  for (let i = 0; i < parseInt(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[n - i - 1][j]
      matrix[n - i - 1][j] = temp
    }
  }

  // 再做对角线翻转
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
};
