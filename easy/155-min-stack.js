/**
 * @name 最小栈
 * @url https://leetcode-cn.com/problems/min-stack/
 * @date 2020-05-12 09:39
 * @tags 栈、设计
 * description
 * ```
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 *
 *
 *  push(x) &mdash;&mdash; 将元素 x 推入栈中。
 *  pop() &mdash;&mdash; 删除栈顶的元素。
 *  top() &mdash;&mdash; 获取栈顶元素。
 *  getMin() &mdash;&mdash; 检索栈中的最小元素。
 *
 *
 *
 *
 * 示例:
 *
 * 输入：
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 *
 * 输出：
 * [null,null,null,null,-3,null,0,-2]
 *
 * 解释：
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.getMin();   --> 返回 -2.
 *
 *
 *
 *
 * 提示：
 *
 *
 *  pop、top 和 getMin 操作总是在 非空栈 上调用。
 *
 *
 * ```
 */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.minStack = [Infinity]
};

/**
 * @param {number} x
 * @return {void}
 * 题解：这里需要注意，最小值会随便栈的变化而变化，所以最小值需要一个栈来处理
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  let minNum = this.minStack[this.minStack.length - 1]
  if (minNum > x) {
    this.minStack.push(x)
  } else {
    this.minStack.push(minNum)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.minStack.pop()
  return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
