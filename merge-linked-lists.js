class Node {
    constructor(val = null, next = null){
        this.val = val;
        this.next = next
    }

    print(){
        let str = ''
        let current = this;
        while(current){
            str += current.val + ' -> '
            current = current.next
        }
        str += 'null'
        console.log(str)
    }
}

class LinkedList {
    constructor(val){
        this.head = new Node(val)
    }
    add(val){
        let newNode = new Node(val, this.head);
        this.head = newNode
        return this // yay chaining
    }
    print(){
       this.head.print()
    }
    static fromArray(arr, reverse = false){
        let temp = new LinkedList(reverse ? arr[arr.length -1] : arr[0] )
        if (reverse) {
            arr.reverse().slice(1).forEach(x => temp.add(x)) 
        }
        else {
            arr.slice(1).forEach(x => temp.add(x))
        }
        return temp
    }
}

let A = new LinkedList(3).add(1)
let B = new LinkedList(2)

const merge = (a, b)=>{
    let c = new Node()
    let prev = c;

    while ( a !== null && b !== null ){
        if (a.val < b.val){
            prev.next = a
            a = a.next

        } else {
        // doesn't matter if it's equal
            prev.next = b;
            b = b.next
        }
        prev = prev.next
    }
    if (a === null) { prev.next = b}
    if (b === null) { prev.next = a}

    return c.next
}

A.print()
B.print()
merge(A.head, B.head).print()

// let D = LinkedList.fromArray([1,2,3,4,5], true)
// D.print()