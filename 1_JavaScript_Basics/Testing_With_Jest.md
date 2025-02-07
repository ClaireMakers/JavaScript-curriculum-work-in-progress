## Objectives:

1. Initialise a new project directory with npm init.
1. Write and run unit tests with Jest.

## Introduction:
Like in other languages, we have to test our programs to make sure they're working. In this module we'll use the [library Jest](https://jestjs.io/) to write and run tests — like we used Pytest when working with Python. We will see how we can use it to test-drive JavaScript functions. 


## Demonstration:

We will test-drive a function called `add` which will take two numbers calculate their sum.

First, let's create one file called `add.test.js` (the part .test is a naming convention so Jest can find out in which files are the tests). 

```
$ touch add.test.js
```
In Jest, we can create groups of tests using a function called `describe()`. It takes two arguments, a string and a callback function. The string should describe what we are testing - in this case, the `add` function we want to test-drive. Inside of the callback function body (in between the curly brackets) is where we will write our test cases:  

```
// file: add.test.js

describe('add', () => {
  // test cases
});
```
We are now all set to start test-driving our `add` function. As usual when writing tests, we need to think what is it we want to test or verify. Let's imagine for a second that the function add exists, and that we can call it inside the REPL. How could we test that this function is working? We could simply call it with some given arguments and verify the result is correct:

```
add(2, 2); 

--> given we call `add` with 2 and 2, it should return 4
```

Let's translate that into a test case for Jest: 

```
// file: add.test.js

describe('add', () => {
  it('adds 2 and 2 and returns 4', () => {

    // TODO: write test

  });
});

```
We are using a Jest function here, the `it` function - you will notice the similar syntax to the describe block. `it` takes a string that describes the test case, and a callback function. Inside of the body of the callback function is where we will write our test code proper.

When writing Jest tests, we will use functions similar to `assert` in pytest, in order to check the output of our functions is what we think it is. We have a few functions at our disposal, you can learn about them in the [Jest documentation](https://jestjs.io/docs/using-matchers). They are called matcher function. 

Today, we will use a very common matcher, `toEqual()`: 

```
// file: add.test.js

describe('add', () => {
  it('adds 2 and 2 and returns 4', () => {
     expect(add(2, 2)).toEqual(4);
  });
});

```

We expect the value passed to the `expect` function to equal the value passed to the `toEqual` function. Here, the return value of `add(2,2)` should equal 4. 

Now, the last thing that we need to do is write the function add and import it inside of our test files: 

add.js
```
const add = (a, b) => {
  return a + b;
}

module.exports = add;
```

add.test.js
```
const add = require('./add');

describe('add', () => {
  it('adds 2 and 2', () => {
    expect(add(2, 2)).toBe(4);
  });
});
```

## Exercise:
### Setting up your own JavaScript project: 

Start by [following this guidance](https://journey.makers.tech/pages/pill-setting-up-a-javascript-project) to setup a new project with NPM and Jest.

### Test drive a multiply function:
Using the same process described above, test-drive a function `multiply(a,b)` that calculates the product of two numbers.

## Challenge:
//I need to wirte a challenge that will get them to manipulate data in a meaningful way to practice everything they did so far + testing with Jest.
