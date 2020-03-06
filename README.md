# chain-caller
Used to create objects similar to colors, which can be chained to call methods, and finally process parameters

# Examle
```js
import chaincaller from 'chain-caller';

const colors = chaincaller(['red', 'blue', 'yellow', 'bold', 'italic'], function(str) {
    return `<div class="${this.chain.join(' ')}">${str}</div>`
})

var str = colors.red.bold.italic('hello world');

console.log(str)

// <div class="red bold italic">hello world</div>
```
# Explain

```js
const obj = chaincaller(list, callback)
```

## list

The collection of method names in the call chain, in fact, the callback function is executed when the final method is called, and the final called collection is passed to the callback function through this.chain.

## callback

Because callback requires "this" to be passed, arrow functions cannot be used
