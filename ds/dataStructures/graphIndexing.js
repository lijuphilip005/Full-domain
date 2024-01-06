class Graph{
    constructor(){
        this.adjacencyList={}
        this.vertexIndex={}
        this.indexCounter=0
        
    }
    
    addvertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
            this.vertexIndex[vertex]=this.indexCounter++
        }
    }
    
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addvertex(vertex1)
        }if(!this.adjacencyList[vertex2]){
            this.addvertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    
    getIndex(vertex){
        return this.vertexIndex[vertex];
    }
    
   display() {
    for (let vertex in this.adjacencyList) {
        let index = this.getIndex(vertex);
        console.log({ vertex, index, neighbors: [...this.adjacencyList[vertex]] });
    }
}


    
}

let graph =new Graph()
graph.addvertex("A")
graph.addvertex("B")
graph.addvertex("C")
graph.addEdge("A","B")
graph.addEdge("B","C")
graph.getIndex("A")
graph.display()