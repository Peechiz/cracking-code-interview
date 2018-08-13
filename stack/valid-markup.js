// {} [] ()
// make sure things are closed properly

const dict = {
  "(":")",
  "{":"}",
  "[":"]"
}

const valid = (str) => {
  let stack = []

  str.split('')
  .forEach((c,i) => {
    if (c in dict){
      stack.push(c)
    } else {
      // if stack is empty
      if (!stack.length){
        return
      }
      // if top of stack's closing tag is not current character
      if (dict[stack[stack.length-1]] !== c){
        return
      }
      // must be the closing character
      stack.pop()
    }
    console.log(stack)
  })
  return stack.length === 0
}

// console.log('false?' + valid('['))
console.log('false?' + valid('[{]}'))
// console.log('true?' + valid('[]{}'))
// console.log('true?' + valid('[a]{b}'))
// console.log('true?' + valid('[a]c{b}'))
// console.log('true?' + valid('[a]'))
// console.log('true?' + valid('a[]'))
console.log('true?' + valid('[({})()]'))
