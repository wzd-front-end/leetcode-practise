/**
 * @name LRU缓存机制
 * @url https://leetcode-cn.com/problems/lru-cache/
 * @date 2020-05-25 09:44
 * @tags 设计
 * description
 * ```
  * 运用你所掌握的数据结构，设计和实现一个  <a href="https://baike.baidu.com/item/LRU" target="_blank">LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。
 *
 * 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
 * 写入数据 put(key, value) - 如果密钥已经存在，则变更其数据值；如果密钥不存在，则插入该组「密钥/数据值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 *
 *
 *
 * 进阶:
 *
 * 你是否可以在 O(1) 时间复杂度内完成这两种操作？
 *
 *
 *
 * 示例:
 *
 * LRUCache cache = new LRUCache( 2 );
 *
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // 返回  1
 * cache.put(3, 3);    // 该操作会使得密钥 2 作废
 * cache.get(2);       // 返回 -1 (未找到)
 * cache.put(4, 4);    // 该操作会使得密钥 1 作废
 * cache.get(1);       // 返回 -1 (未找到)
 * cache.get(3);       // 返回  3
 * cache.get(4);       // 返回  4
 *
 *
 * ```
 */

function Node(key, value){
  this.key = key;
  this.value = value;
  this.next = null;
  this.previous = null;//修改完双向链表
}

function LList() {
  this.head = new Node('head', 'head');
  this.find = find;
  this.findLast = findLast;
  this.insert = insert;
  this.remove = remove;


  function find(item) {
    var currNode = this.head;

    while (currNode && currNode.key !== item) {
      currNode = currNode.next;
    }

    return currNode;
  }

  function insert(key, value, item) {
    var newNode = new Node(key, value);
    var current = this.find(item);
    try{
      if(current){
        if(current.next) current.next.previous = newNode
        newNode.next = current.next;
        newNode.previous = current;//双向链表元素前置值设置
        current.next = newNode;
        return newNode
      } else {
        throw new Error('未找到目标节点')
      }
    }catch(e){
      console.log(e.message)
    }
  }

  function remove(element) {
    var currentNode = this.find(element);

    if (!(currentNode === null)) {
      if(currentNode.previous){
        currentNode.previous.next = currentNode.next;
      }

      if(currentNode.next){
        currentNode.next.previous = currentNode.previous;
      }

      currentNode.next = null;
      currentNode.previous = null;
    }
  }

  function findLast() {
    var currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.key_table = {}
  this.time_list = new LList()
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(this.capacity === 0){return -1}
  if(this.key_table[key]){
    let value = this.key_table[key]
    this.time_list.remove(key)
    this.time_list.insert(key, value, 'head')
    return value
  } else {
    return -1
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(this.capacity === 0){return -1}
  let node = this.key_table[key]
  if(node === undefined){
    let keyLength = Object.keys(this.key_table).length
    if(keyLength === this.capacity){
      let lastNode = this.time_list.findLast()
      delete this.key_table[lastNode.key]
      this.time_list.remove(lastNode.key)
    }
    this.key_table[key] = value
    this.time_list.insert(key, value, 'head')
    this
  } else {
    this.key_table[key] = value
    this.time_list.remove(key)
    this.time_list.insert(key, value, 'head')
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
