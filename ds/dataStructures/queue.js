    /**
     * queue is a datastructure which stores data in the format of 
     * first in first out (fifo) , first one entered will be deleted first entering process is known as enqueue 
     * and the data removal is known as dequeue 
     * data is entered fromm the rear end and removed from the front end
     * application 
     *  in  printers queue is used for schduleing printing
     * cpu task schduling
     *  call stack and microtask queue in javascript engine
     */

    
    class Queue{
        constructor(){
            this.items=[]
        }
     enqueue(element){
        this.items.push(element)
     }
     dequeue(){
        if(this.isEmpty()){
            return "queue is empty"
        }else{
            this.items.shift()
        }

     }
     
     isEmpty(){
        return this.items.length===0
     }
      
     print(){
        console.log(this.items.toString())
     }
    }

    const queue=new Queue()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)
    queue.dequeue()
   queue.print()
