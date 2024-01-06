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
        return this.size==0
    }
    prepend(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
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
        
        append(value){
            let node=new Node(value)
            if(this.isEmpty()){
                this.head=node
            } else{
                let prev=this.head
                while(prev.next){
                    prev=prev.next
                }
                prev.next=node
            }
            this.size++
        }
        
        push(value){
            this.prepend(value)
        }
        
        pop(){
            let remove=this.head.value
           this.head= this.head.next
           this.size--
           return remove
        }
        
        peek(){
            return this.head.value
        }
        
    
}
let list =new LinkedList()
list.push(1)
list.push(2)
list.push(3)
list .pop()
list.peek()
list.print()

