// The example of LinkedList:
//
// const list = {
// 	head: {
// 			value: 10
// 			next: {
// 					value: 30
// 					next: {
// 							value: 50
// 							next: null
// 					}
// 			}
// 	}
// };

class LinkedList {
	constructor() {
		this.head = null;
	}

	// Adds an element at the end of list 
	add(element) { 
		// Creates a new node 
		var node = new ListNode(element); 

		// To store current node 
		var current; 

		// If list is empty add the element and make it head 
		if (this.head === null) 
			this.head = node; 
		else { 
			current = this.head; 

			// Iterate to the end of the list 
			while (current.next) { 
				current = current.next; 
			} 

			// Add node 
			current.next = node; 
		} 
	} 

	reverse() {
		var current = this.head;
		var next = null;
		var prev = null;
		
		while(current) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}

		this.head = prev;
	}
} 
 
class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

var myLinkedList = new LinkedList();
myLinkedList.add(10);
myLinkedList.add(30);
myLinkedList.add(50);
myLinkedList.reverse();
console.log(myLinkedList);