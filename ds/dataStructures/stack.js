
class Stack{
    constructor(){
        this.item=[]
    }

    push(element){
        this.item.push(element)
    }
    
    pop(){
        if(this.isEmpty()){
            return "stack underflow this stack is empty"
        }else{
            return this.item.pop()
        }

    }

    isEmpty(){
        return this.item.length==0;
    }



}


const stack=new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

console.log(stack.item)