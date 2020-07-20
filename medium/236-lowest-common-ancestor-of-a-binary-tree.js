/**
 * @name 二叉树的最近公共祖先
 * @url https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * @date 2020-05-11 09:52
 * @tags 树
 * description
 * ```
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 *
 * <a href="https://baike.baidu.com/item/%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88/8918834?fr=aladdin" target="_blank">百度百科中最近公共祖先的定义为：&ldquo;对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。&rdquo;
 *
 * 例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]
 *
 * <img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/15/binarytree.png" style="height: 190px; width: 200px;">
 *
 *
 *
 * 示例 1:
 *
 * 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * 输出: 3
 * 解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
 *
 *
 * 示例 2:
 *
 * 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * 输出: 5
 * 解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
 *
 *
 *
 *
 * 说明:
 *
 *
 *  所有节点的值都是唯一的。
 *  p、q 为不同节点且均存在于给定的二叉树中。
 *
 *
 * ```
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 题解：递归，实际上是不断的分析左右子树是否有存在目标节点，有的话即保存节点，且我们是自底向上的，所以找到的一定是最深的
 * 通过递归查找左右子树中是否符合节点的要求，符合的话，则返回true
 * 判断其左右子树是否都存在符合的节点，如果是，则该节点就是最近公共祖先，如果只有一个节点是，则判断当前节点是否符合其中一个值，是的话，
 * 同为最近祖先，否则将返回结果
 */
var lowestCommonAncestor = function (root, p, q) {
  let ans
  dfs(root, p, q)
  return ans

  function dfs(root, p, q) {
    if (root === null) return false
    let lson = dfs(root.left, p, q)
    let rson = dfs(root.right, p, q)

    if ((lson && rson) || (root.val === p.val || root.val === q.val) && (lson || rson)) {
      ans = root
    }

    return lson || rson || (root.val === p.val) || (root.val === q.val)
  }

};
