//create linked list class

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

        remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    insertBefore(newNode, nodeIns){
    //check if head is null
    if(this.head === null){
      return new Error('No nodes in linked list');
    } else {
      let demoNode = this.head;
      let prevNode = this.head;

      while (demoNode) {
        if (demoNode.value === nodeIns) {
          prevNode.next = new _Node(newNode, demoNode);
          return;
        }
        prevNode = demoNode;
        demoNode = demoNode.next;
      }
      return new Error('That node does not exist');
    }
  }

  insertAfter(newNode, nodeIns){
    //check if head is null
    if(this.head === null){
      return new Error('No nodes in linked list');
    } else {
      let demoNode = this.head;
      let prevNode = this.head;

      while (demoNode) {
        if (demoNode.value === nodeIns) {
          prevNode = demoNode;
          demoNode = demoNode.next;
          prevNode.next = new _Node(newNode, demoNode);
          return;
        }
        prevNode = demoNode;
        demoNode = demoNode.next;
      }
      return new Error('That node does not exist');
    }
  }

  insertAt(newNode, place){
    if(this.head === null){
      return new Error('No nodes in linked list');
    } else {
      let i = 1; //counter variable
      let demoNode = this.head;
      let prevNode = this.head;
      while(demoNode){
        if(i === pos){
          prevNode.next = new _Node(newNode, demoNode);
          return;
        }
        i = i + 1;
        prevNode = demoNode;
        demoNode = demoNode.next;
      }
    }
    return new Error('The list is not that long');
  }

  findLast(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

size() {
  let current = this.head;
  let counter = 0;
  while( current !== null ) {
   counter++
   current = current.next
  }
  return counter;
}

isEmpty() {
  return this.length() < 1
}

findPrevious(item) { 
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
        return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
        /* Return null if it's the end of the list 
           and the item is not on the list */
        if (currNode.next === null) {
            return null;
        }
        else {
            // Otherwise, keep looking 
            currNode = currNode.next;
        }
    }
    // Found it
    return currNode.previous;


  reverse() {
   let current = this.head.next;
   let prev = null;
   let next;
   while(current !== null) {
     next = current.next
     current.next = prev
     prev = current
     current = next
   }
   this.head.next = prev
   return true
 }

//Mystery Program:

//iterating to remove duplicates
