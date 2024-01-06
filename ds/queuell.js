class Node{
    constructor(value){
        this.value=value,
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null,
        this.size=0
    }
    
    getSize(){
       return this.size
    }
    isEmpty(){
        return this.size==0;
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
             prev.next=node
         }
         this.size++
    }
    
    print(){
        if(this.isEmpty()){
            console.log("list is empty")
        } else{
            let curr=this.head
            let listValues=""
            while(curr){
                listValues+=`${curr.value} `
                curr=curr.next
            }
            console.log(listValues)
        }
    }
    
    enqueue(value){
        this.append(value)
    }
    
    dequeue(){
        if(this.isEmpty()){
            console.log("list is empty")
        }else{
            const frontValue=this.head.value
            this.head=this.head.next
            this.size--
            return frontValue;
        }
    }
    
    peek(){
        return this.head.value
    }

}




const list =new LinkedList()
list.enqueue(1)
list.enqueue(2)
list.enqueue(3)
list.enqueue(4)
list.enqueue(5)
list.enqueue(6)
list.dequeue()
list.print()
