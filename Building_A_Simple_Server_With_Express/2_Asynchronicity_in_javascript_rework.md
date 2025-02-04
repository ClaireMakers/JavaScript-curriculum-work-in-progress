THIS IS NOT THE WHOLE PILL, I'VE ONLY GOT THE RELEVANT SNIPPETS TO WHICH I MADE CHANGES HERE, I WILL UPDATE THE EXISTING PILL


## Objectives:
1. Learning about the execution order of code in JavaScript, and how it handles tasks. 

1. Learn about the difference between synchronous and asynchronous code execution.

1. Learn why it matters in the context of web development and when interacting with a simple server. 

## Synchronous Code:

Code runs in a controlled sequence, called the **execution order**. For instance, this snippet of code would run in the order it was written, from top to bottom:

```
const countSheep = (sheepArray) => {
    return sheepArray.length;
}

const sheep = ["Bramble", "Daffodil", "Buttercup"];

const sheepAmount = countSheep(sheep);

console.log(sheepAmount);
```

The execution order of this programme would be as follows: 

1. Declaration and assignation of the function ```countSheep```
1. Declaration and assignation of the variable ```sheep```
1. Call the ```countSheep()``` function with the argument ```sheep``` and saves the return value in ```const sheepAmount```. 
1. Call the ```console.log()``` function on the sheepAmount variable, printing 3 to the console. 

If we had tried to call the function ```countSheep``` before it was declared, we would have ran into a bug due to the top to bottom execution order - as far as our programme is concerned, a variable only exists if it has been declared before being used. 

This is typical behaviour, and an example of **synchronous code** - operations are executed one at a time, from top to bottom. The next operation can only run once the one before has finished executing. Here, all the operations are **immediate tasks** - they take no time to run at all, so executing them synchronously, one after the other, isn't an issue in terms of the runtime of our programme.

This is the kind of code you have been writing so far - we will now go into a little bit more depth as to how JavaScript works under the hood, so that you can start using it within the context of web development, and so that we can learn how to interact with the simple Express server we built in the previous pill. 

## JavaScript is a single-threaded language:

JavaScript is what we call a **single-threaded language**. This means that it can only run one thing at a time, and can only start executing the next operation in the programme once the first task has completed. Multi-threaded languages can support more than one operation all at once, but that's not the case with JavaScript.

Given that JavaScript is used in web browsers, that typically need to be able to run many operations all at once, this comes with a set of challenges. Some of the operations that we need to perform for the web **will take an unpredictable amount of time to run**. 

For instance, when sending HTTP requests to servers, **you cannot know how long it will take to get a response**, as that depends on a number of factors, including the speed of your internet. These are what we call long-running tasks, and if they were run synchronously *(i.e. one after the other, the next task only running once the one before has finished executing)*, our execution order would look something like this: 

![Two diagrams comparing immediate tasks vs tasks that take time in a program, in each one request has to wait for the previous to complete before beginning, meaning a slow task stops everything from happening](https://eu-west-2.graphassets.com/AXI7KNWwuTwCtIHy5bFnWz/3LXtOuRToCA0iGzRuUHg)

Imagine what would happen if our browsers processed requests like on the diagram above! Picture how slow navigating on the internet would be if they were only able to send one request at a time and had to wait for a response before moving on to the next one. 

For example, when loading the reddit homepage, there's about 266 operations executing to get all the data needed to render everything on the page - if these had to be run one by one by one, some slower than other, you can picture just how slow and frustrating loading any given page would be. **JavaScript's single thread of execution would end up "blocked" by long-running operations**, unable to go ahead and run the next one before the one prior finished executing. For instance, if each of the 266 operations needed to load reddit's homepage all took about 4 seconds to run on a slow 3G network, it would take 1064 seconds, or about 18 minutes to load the page entirely! It wouldn't be quite so bad on a faster network, but still much slower than what we are used to. 




------------
/* This is just for illustration purpose only, not proper syntax to simplify things for now, so there's no point attempting to run the code below. */

```
const syncOperation = () => {
    console.log("This is a synchronous function");
};

const asyncOperation = async () => {
    console.log("This is an asynchronous function");
};

asyncOperation();
syncOperation();

-----------------------------
Output:

This is a synchronous function
This is an asynchronous function
```

This feels counter-intuitive, because the ``asyncOperation`` function was called first, and yet its output appears last on the output. Let's break down the order in which this programme would execute if it were proper JS code: 

1. Declaration of the `syncOperation` function.
1. Declaration of the `asyncOperation` function.
1. The programme will **start executing** the `asyncOperation`function when it is called, but will not stop and wait for it to finish. 
1. Run the `syncOperation()` function. 
1. Finish executing the asynchronous element in the code - asyncOperation() runs 
last.