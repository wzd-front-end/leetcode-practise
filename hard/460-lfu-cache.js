/**
 * @name LFU缓存
 * @url https://leetcode-cn.com/problems/lfu-cache/
 * @date 2020-04-05 18:28
 * @tags 设计
 * description
 * ```
  * 设计并实现<a href="https://baike.baidu.com/item/%E7%BC%93%E5%AD%98%E7%AE%97%E6%B3%95">最不经常使用（LFU）缓存的数据结构。它应该支持以下操作：get 和 put。
 * 
 * get(key) - 如果键存在于缓存中，则获取键的值（总是正数），否则返回 -1。
 * put(key, value) - 如果键不存在，请设置或插入值。当缓存达到其容量时，它应该在插入新项目之前，使最不经常使用的项目无效。在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，最近最少使用的键将被去除。
 * 
 * 一个项目的使用次数就是该项目被插入后对其调用 get 和 put 函数的次数之和。使用次数会在对应项目被移除后置为 0。
 * 
 * 进阶：
 * 你是否可以在 O(1) 时间复杂度内执行两项操作？
 * 
 * 示例：
 * 
 * LFUCache cache = new LFUCache( 2 ) ;
 * 
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // 返回 1
 * cache.put(3, 3);    // 去除 key 2
 * cache.get(2);       // 返回 -1 (未找到key 2)
 * cache.get(3);       // 返回 3
 * cache.put(4, 4);    // 去除 key 1
 * cache.get(1);       // 返回 -1 (未找到 key 1)
 * cache.get(3);       // 返回 3
 * cache.get(4);       // 返回 4
 * 
 *
 */

//Node类
function Node(key, value, freq) {
  this.key = key;
  this.value = value;
  this.freq = freq;
  this.next = null;
  this.previous = null;//修改完双向链表
}

function LList() {
  this.head = new Node('head', 'head', 1);
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

  function insert(key, value, freq, item) {
    var newNode = new Node(key, value, freq);
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
var LFUCache = function (capacity) {
  this.minfreq = 0
  this.capacity = capacity
  this.key_table = {}
  this.freq_table = {}
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (this.capacity === 0) return -1
  if (this.key_table[key]) {
    let value = this.key_table[key].value
    let freq = this.key_table[key].freq
    this.freq_table[freq].remove(key)
    if(this.freq_table[freq].head.next === null){
      delete this.freq_table[freq]
      if(this.minfreq === freq) this.minfreq += 1
    } 

    let key_node
    if(this.freq_table[freq + 1]){
      key_node = this.freq_table[freq + 1].insert(key, value, (freq + 1), 'head')
    } else {
      this.freq_table[freq + 1] = new LList()
      key_node = this.freq_table[freq + 1].insert(key, value, (freq + 1), 'head')
    }

    this.key_table[key] = key_node
    return value
  } else {
    return -1
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 * 
 * 552ms  8.33%
 * 77.8MB  100%
 */
LFUCache.prototype.put = function (key, value) {
  if(this.capacity === 0) return
  let node = this.key_table[key]
  if(node === undefined){
    let keyLength = Object.keys(this.key_table).length
    if(Number(keyLength) === Number(this.capacity)){
      let lastNode = this.freq_table[this.minfreq].findLast()
      delete this.key_table[lastNode.key]
      this.freq_table[this.minfreq].remove(lastNode.key)
      if(this.freq_table[this.minfreq].head.next === null){
        delete this.freq_table[this.minfreq]
      }

    } 
    let key_node
    if(this.freq_table[1]){
      key_node = this.freq_table[1].insert(key, value, 1, 'head')
    } else {
      this.freq_table[1] = new LList()
      key_node = this.freq_table[1].insert(key, value, 1, 'head')
    }
    this.key_table[key] = key_node
    this.minfreq = 1
  } else {
    let freq = node.freq

    this.freq_table[freq].remove(key)
    if(this.freq_table[freq].head.next === null){
      delete this.freq_table[freq]
      if(this.minfreq === freq) this.minfreq += 1
    } 

    let key_node
    if(this.freq_table[freq + 1]){
      key_node = this.freq_table[freq + 1].insert(key, value, (freq + 1), 'head')
    } else {
      this.freq_table[freq + 1] = new LList()
      key_node = this.freq_table[freq + 1].insert(key, value, (freq + 1), 'head')
    }

    this.key_table[key] = key_node
  }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// /**
//  * @param {number} capacity
//  */
// var LFUCache = function(capacity) {
//   this.capacity = capacity
//   this.length = 0
//   this.timeLine = 1
//   this.hashTable = {}
// };

// /** 
// * @param {number} key
// * @return {number}
// */
// LFUCache.prototype.get = function(key) {
//   if(this.hashTable[key] && this.capacity !== 0){
//       this.timeLine++
//       this.hashTable[key].frequency += 1
//       this.hashTable[key].time = this.timeLine
//       return this.hashTable[key].value
//   } else {  
//       return -1
//   }
// };

// /** 
// * @param {number} key 
// * @param {number} value
// * @return {void}
// */
// LFUCache.prototype.put = function(key, value) {
//   this.timeLine++
//   if(!this.hashTable[key]){
//       if(this.length < this.capacity){
//           this.length++
//           this.hashTable[key] = {
//               value: value,
//               frequency: 1,
//               time: this.timeLine
//           }
//       } else {
//           let min = Infinity
//           let res = []

//           Object.keys(this.hashTable).forEach(key => {
//               if(this.hashTable[key].frequency < min){
//                   min = this.hashTable[key].frequency
//                   res = [key]
//               } else if(this.hashTable[key].frequency === min){
//                   res.push(key)
//               }
//           })

//           if(res.length <= 1){
//               delete this.hashTable[res[0]]
//           } else{
//               let minKey = res[0]
//               res.forEach(key => {
//                  if(this.hashTable[minKey].time > this.hashTable[key].time) {
//                      minKey = key
//                  }
//               })

//               delete this.hashTable[minKey]
//           }
//           this.hashTable[key] = {
//               value: value,
//               frequency: 1,
//               time: this.timeLine
//           }
//       }
//   } else {
//       this.hashTable[key].value = value
//       this.hashTable[key].time = this.timeLine
//   }
// };

// /**
// * Your LFUCache object will be instantiated and called as such:
// * var obj = new LFUCache(capacity)
// * var param_1 = obj.get(key)
// * obj.put(key,value)
// */

['LFUCache','put','put','get','put','get','get','put','get','get','get']
  [[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]