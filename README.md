A short game from the Brad Traversy Javascript course.
We will be coding the javascript ourselves.

## Issues

- I could not see the values of my span after setting what should be there in javascript

  ```
    let min = 1,
     max = 10,
    const maxNum = document.querySelector('.max-num');
    maxNum.textContent = max;
    //NOT
    maxNum.value = max;

  ```

  -

  * Cannot set property 'color' of Undefined in JS
    - I was doing
    ```
       message.textContent.style.color = color;
       //INSTEAD OF
       message.style.color = color;
    ```
  * To define a color as a parameter, add it in quotes

````
   function setMessage(error, color) {
     message.style.color = color;
     message.textContent = error;
   }
   setMessage('Kindly input a number between 1 and 10', 'red');
   ```

````
