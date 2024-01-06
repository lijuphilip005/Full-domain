class MinHeap {
    constructor() {
        this.data = [];
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    leftIndex(index) {
        return index * 2 + 1;
    }

    rightIndex(index) {
        return index * 2 + 2;
    }

    swap(index1, index2) {
        let temp = this.data[index1];
        this.data[index1] = this.data[index2];
        this.data[index2] = temp;
    }

    insert(key) {
        this.data.push(key);
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIndex = this.data.length - 1;
        while (currentIndex > 0 && this.data[currentIndex] < this.data[this.parent(currentIndex)]) {
            this.swap(currentIndex, this.parent(currentIndex));
            currentIndex = this.parent(currentIndex);
        }
    }
}

let heap = new MinHeap();
heap.insert(1);
heap.insert(10);
heap.insert(4);
heap.insert(8);
heap.insert(6);
console.log(heap.data.join(","));
