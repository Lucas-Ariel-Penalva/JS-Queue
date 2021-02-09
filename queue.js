class Queue{

    constructor(){
        this.collection = [];
    };

    show(){
        if(!this.collection.length){
            console.log(`The Queue is empty.`);
            return false;
        } else {
        console.log(this.collection);
        return this.collection;
        };
    };

    enqueue(element){
        if(typeof element === "string" || typeof element === "number"){
        this.collection.push(element);
        console.log(`Placed "${element}" into the Queue.`);
        } else throw new TypeError("The Queue only accepts Strings or Numbers.");
    };

    dequeue(){
      let dequeuedElement = this.collection.shift();
      console.log(`Dequeued "${dequeuedElement}" from the Queue.`);
      return dequeuedElement; 
    };

    front(){
        console.log(`In front of the Queue: "${this.collection[0]}".`)
        return this.collection[0];
    };

    size(){
        console.log(`The size of the Queue is "${this.collection.length}".`)
        return this.collection.length;
    };

    isEmpty(){
        let isEmpty = this.collection.length === 0;
        if(isEmpty){
            console.log(`The Queue is empty.`);
            return true;
        } else {
            console.log(`The Queue isn't empty.`);
            return false;
        };
    };

};

