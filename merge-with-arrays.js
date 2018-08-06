const merge = ( a, b, out = [] ) => {
    
    //terminate
    if (a.length + b.length === 0){
        return out
    }
    if (a.length === 0){
        return out.concat(b)
    }
    if (b.length === 0){
        return out.concat(a)
    }
    
    // check head
    if (a[0] < b[0]){
        out.push(a[0])
        a = a.slice(1)
    } else if (a[0] > b[0]){
        out.push(b[0])
        b = b.slice(1)
    } else {
        out.push(a)
        out.push(b)
        a = a.slice(1)
        b = b.slice(1)
    }
    return merge(a,b,out)
}

console.log('should be [1,2,3,4,5,6]')
console.log( merge( [1,3,5], [2,4,6] ))