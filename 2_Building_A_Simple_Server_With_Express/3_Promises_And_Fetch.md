## Objectives:
1. Being able to define what a promise is, and what it's used for.
1. Understanding the `async/await` syntax for writing promises, and get familiar with the `try/catch` blocks. 
1. Learn the basics of the fetch API.

## Promises:

Promises are a feature of JavaScript that we use to handle the asynchronicity problem described in the previous section, and regain control over the execution flow of our programme. Promises let you control the order in which some operations will run in your code - for example, if some of your code depends on data coming from an external server, **using promises will let you run these operations once and only once you have received the data**.

You can think of promises as containers for future data, **a representation of the future completion or failure of an asynchronous operation**. As such, they have three different states: 

1. **Fulfilled** - *the asynchronous operation completed successfully* - for instance, the data you requested from an external server has come back with no isses. 

1. **Rejected** - *the asynchronous operation failed* - for instance, you sent an invalid request to a server, and it answered with an error.  

1. **Pending** - *the Promise has yet to to be either rejected or fulfilled.* - this is the lapse between sending a request and getting an answer back from your server. 

![image-4.png](https://eu-west-2.graphassets.com/AXI7KNWwuTwCtIHy5bFnWz/aMqpq4UjS6OnHdO8tLR0)


## Using Promises to work with web servers: 

Promises in JavaScript are what we use when interacting with web servers. Whenever we send an HTTP request, there is always an element of uncertainty as to how long it will take to respond with the desired data, or with an error. The promise syntax will make sure that you are not inadvertently trying to perform operations on data that you don't yet have, before you have received a response from the server. 

We often use promises along with a very handy function called `fetch` that's built-in JavaScript. It lets you write HTTP requests very easily, as well as handle the response coming back from the server. Let's have a look at what a request might look like: 

```
const fetchData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu"); //sends an HTTP request to the relevant server based on the url you pass as its argument.
    return response; 
}
```

A few different things are happening in the code snippet above:

1. We have written a function called `fetchData`, and signalled that it's an asynchronous function with the `async` keyword. This means the function will contain long-running operations.

1. We have used the `fetch` function to create a request, and passed it the url of a publicly available server that responds with some pokemon data. 

1. The `await` keyword in front of the `fetch` function call means that this is a long running operation that will not finish executing immediately - this `await` keyword, alongside the `async` one we used when declaring our function forms the basis of the promise syntax. Here, it means that the `response` variable will not be set to the response from the server before the request has finished executing. 

When you see the word `await`, it is tempting to think that your programme stops executing and "waits" for the data to be returned, but it's not strictly true - everything discussed in the section before this one still applies. When encountering a long-running task like a fetch request, JavaScript will run all other short-running tasks first, before finishing to execute asynchronous functions. 

Let's have a look at an example in practice: 

[
VIDEO HERE - GO OVER:
- Execution order 
- Showing pending promise 
- Showing res.json()
- Show anti-pattern - for instance, try to push an element to an array outside the function, and show that it's not possible to do that. 
]

```
code from video is they want to run it I think
```

## Promise syntax - dealing with all the potential promises states: 

In the first section, we mentionned the three potential states of a promise - pending, fulfilled or rejected. Let's see how we might handle them synctactically in JavaScript:

```
const fetchData = async () => {

    //The try block is where we send our request and deal with the data from successful ones
    try {
        //First promise:
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

        //Second promise - runs if the one above is fulfilled
        const data = await response.json(); 

        //This will run if the two promises above are fulfilled
        console.log(data); 

    //The catch block deals with rejected requests and errors
    } catch(error) {

        //This will run if either of the promises in the try block is rejected
        console.log(error);

    }
}
```

Let's run this code together and examine what happens: 

[Video here to go through the code above]

## Using Promises and Fetch to make requests to our own Express back-end: 

So far, we have been sending our requests to an external server available to us on the internet, but how do we make requests to our own local development servers? Take a moment to ponder what we might need to do differently before starting the video, and see if you can guess what part of our code we'll need to modify to send calls to our own back-end! 


[Video of me showing how to do that using the cat server]


```
const fetchCatData = async () => {
    try {

        /*The url lets us interact with any server we like, including our own.
        Here we send a GET request to our Express back-end: */
        const response = await fetch("http://localhost:3000/cats");

        const catData = await response.json(); 

        console.log(catData);
        return catData;

    } catch(error) {
        console.log(error);
    }
}

```

## Challenge: 

Create a new file to write a few functions that will make requests to your own back-end built for the Express challenge and log the data to the console. You should write the following three function, and they should output the below on your terminal when you run them: 

```
fetchMyName()
----> { name: "yourName" }

fetchCities()
----> { cityList: ["Nairobi", "Tokyo", "Helsinki", "Berlin"] }


fetchCountries()
----> { countriesList: [{ country: "France", language: "French", id: "1" }, {country: "Spain", language: "Spanish", "id": 2}]}
```



