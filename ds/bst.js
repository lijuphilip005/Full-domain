
class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }

 isEmpty(){
     return this.root==null
 }
    
    insert(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }
    
    insertNode(root,node){
        if(node.value<root.value){
            if(root.left==null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    
    
    search(root,value){
        if(!root){
            return false
        }if(value==root.value){
            return root.value
        }else if(value<root.value){
            return this.serarch(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }
    
    preOrder(root){
       if(root){
           console.log(root.value)
           this.preOrder(root.left)
           this.preOrder(root.right)
       }
}

inOrder(root){
    if(root){
        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
    }
}
postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
    }
}

min(root){
    if(!root.left){
        return root.value
    }else{
       return this.min(root.left)
    }
}

max(root){
    if(!root.right){
        return root.value
    }else{
        return this.max(root.right)
    }
}











}

let bst =new BinarySearchTree()
bst.insert(10)
bst.insert(1)
bst.insert(14)
bst.insert(2)
bst.insert(7)
bst.insert(3)
console.log(bst.min(bst.root))
console.log(bst.max(bst.root))