class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);

a.next = b;
b.next = c;
c.next = d;

//linked list traversal

const printLinkedList = (head) => {
    let current = head;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
};

//linked list traversal recursive

const printLinkedLisRecusive = (head) => {
    if (!head) return;
    console.log(head.value);
    printLinkedLisRecusive(head.next);
};

//linked list collection traversal

const printLinkedListCollection = (head) => {
    const values = [];
    let current = head;
    while (current) {
        values.push(current.value);
        current = current.next;
    }
    return values;
};

//linked list collection traversal recursive

const printLinkedListCollectionRecusive = (head, values = []) => {
    if (!head) return;
    values.push(head.value);
    printLinkedListCollectionRecusive(head.next, values);
    return values;
};

//sum of linked list

const sumLinkedList = (head) => {
    let current = head;
    let sum = 0;
    while (current) {
        sum += current.value;
        current = current.next;
    }
    return sum;
};

//sum of linked list recursive

const sumLinkedListRecusive = (head) => {
    if (!head) return 0;
    let sum = head.value;
    sum += sumLinkedListRecusive(head.next);
    return sum;
};

//linked list find node

const findNode = (head, value) => {
    let current = head;
    while (current) {
        if (current.value === value) {
            return current;
        }
        current = current.next;
    }
    return null;
};

//linked list find node recursive

const findNodeRecusive = (head, value) => {
    if (!head) return null;
    if (head.value === value) {
        return head;
    }
    return findNodeRecusive(head.next, value);
};

//linked list get node value at index

const getNodeValueAtIndex = (head, index) => {
    let current = head;
    let value = null;
    let currentIndex = 0;
    while (current) {
        if (currentIndex === index) {
            value = current.value;
            break;
        }
        current = current.next;
        currentIndex++;
    }
    return value;
};

//linked list get node value at index recursive

const getNodeValueAtIndexRecusive = (head, index) => {
    if (!head) return null;
    if (index === 0) {
        return head.value;
    }
    return getNodeValueAtIndexRecusive(head.next, index - 1);
};

//linked list reverse list

const reverseLinkedList = (head) => {
    let current = head;
    let previous = null;
    while (current) {
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
};

//linked list reverse list recursive

const reverseLinkedListRecusive = (head, prev = null) => {
    if (!head) return prev;
    const next = head.next;
    head.next = prev;
    return reverseLinkedListRecusive(next, head);
};

//create zipper linked list


