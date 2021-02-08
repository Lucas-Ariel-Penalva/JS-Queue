//TEMPORARY VERSION

class MyQueue{
    
    /*FIRST IN, FIRST OUT, elements come out FROM THE BEGINNING of the array (shift is fundamental).
      Set methods to show the item in from of the Queue(collection[0]) and to check if the queue is empty
    */

    constructor(){
        this.collection = [];
    };

    show(){
        if(this.collection.length === 0){
            console.log(`There's nothing here!`);
        }else{ 
        console.log(this.collection);}
    };

    enqueue(element){
        this.collection.push(element);
    };

    dequeue(){
      return this.collection.shift();
    };

    front(){
        console.log(`In front of the queue: "${this.collection[0]}"`)
        return this.collection[0];
    };

    size(){
        console.log(`Size of the queue: ${this.collection.length}`)
        return this.collection.length;
    };

    isEmpty(){
        console.log(`Is the queue empty? ${(this.collection.length === 0)}`)
        return (this.collection.length === 0);
    };

}

let testQueue = new MyQueue();
testQueue.show()
testQueue.enqueue(2)
testQueue.enqueue(3)
testQueue.enqueue(4)
testQueue.enqueue(5)
testQueue.enqueue(6)
testQueue.show();
testQueue.front()
testQueue.size()
testQueue.isEmpty()
testQueue.dequeue()
testQueue.dequeue()
testQueue.show()
testQueue.size()
