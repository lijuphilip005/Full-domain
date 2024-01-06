/**
 * in linked list data is stored in a series of nodes where, each node contain data and a pointer that points to the next node 
 *  data is not stored in continquous manner like array different nodes will be stored at different memory locations while pointer 
 * points to the next memory location and last node will be pointing towards null to denote end of the list,and first node is known as head.
 * types 
 * singly=> it is unidirectional the pointer will be pointing in a single direction
 * --used in stack and queue implementation  browser history  
 * doubly=> it is bidirectional the pointer will will pointing towards both direction
 * ---  used in browsers forward and backward button to navigate between pages
 * circular=> the tail pointer will be pointing towards head ,like a circle in direction
 *   --- used for slideshows in websites the images can be placed in circular 
 * we can easily access and deleted because of noncontingous storage in the memory ,there will be no need to rearrange the nodes 
 */


  class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
  }

  class LinkedList{
    constructor(){
        this.head=null
        this.size=0;
    }

    getSize(){
        return this.size
    }
  isEmpty(){
    return this.size==0;
  }
  prepend(value){
       let node =new Node(value)
      if(this.isEmpty()){
        this.head=node
      } else{
           node.next=this.head
           this.head=node
      }
      this.size++

  }
  append(value){
    let node=new Node(value)
    if(this.isEmpty()){
      this.head=node
    }else{
        let prev=this.head
        while(prev.next){
           prev=prev.next
        }
        prev.next=node;
        
    } 
    this.size++
  }
  reverse(){
    let prev=null
    let curr=this.head
    while(curr){
      let next=curr.next
      curr.next=prev
      prev=curr
      curr=next
    }
    this.head=prev
  }





  print(){
    if(this.isEmpty()){
        console.log("list is empty")
    }else{
        let curr=this.head
        let listValues=""
        while(curr){
            listValues+=`${curr.value} `
            curr=curr.next
        }

        console.log(listValues)
    }
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
        return;
    }
    if (index === 0) {
        this.prepend(value);
    } else {
        let node = new Node(value);
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }
        node.next = prev.next; 
        prev.next = node;
        this.size++;
    }
}
remove(index) {
  if (index < 0 || index >= this.size) {
      return null;
  }
  let removeNode;

  if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
  } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
  }
  this.size--;
  return removeNode.value;
}






  }

  let list=new LinkedList()

  list.append(1)
  list.append(3)
  list.append(4)
  list.append(2)
  list.append(5)
  list.reverse()
  list.print()
