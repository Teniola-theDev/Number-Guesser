A short game from the Brad Traversy Javascript course.
We will be coding the javascript ourselves.

https://teniola-thedev.github.io/Number-Guesser/ 

## Discoveries

1. I prefer using ordered lists to unordered lists
2. git commit -a -m "<message>"
3.

## Issues

1. I could not see the values of my span after setting what should be there in javascript

```
  let min = 1,
   max = 10,
  const maxNum = document.querySelector('.max-num');
  maxNum.textContent = max;
  //NOT
  maxNum.value = max;

```

2. Cannot set property 'color' of Undefined in JS

```
  I WAS DOING
    message.textContent.style.color = color;
  INSTEAD OF
    message.style.color = color;
```

3. To define a color as a parameter, add it in quotes

```
   function setMessage(error, color) {
     message.style.color = color;
     message.textContent = error;
   }
   setMessage('Kindly input a number between 1 and 10', 'red');
```

4. forgot how to declare ternary operator

```
function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');
  guessInput.disabled = won;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg, color);

}
```

5. Ran into this error

```
 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener'
```

**SOLUTION**

> I did not target the DOM element correctly.

### What i wish to add

1. Be able to hide the stuff and only show the input button.

## What I should read more about

Hoisting.
