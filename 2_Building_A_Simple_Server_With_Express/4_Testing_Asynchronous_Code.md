## Testing Asynchronous Code: 

## Objective:
1. Learn how to write tests for asynchronous code.
1. Test-drive an asynchronous function. 

## Introduction:
So far, **we have been writing tests for synchronous functions only**. When we test functions fetching data from a server, we have to deal with the fact **the response data we want to work with is coming back to us asynchronously**.

Let's see how we should deal with this new case scenario with Jest. 

## Demonstration: 

I will test-drive a function that uses my simple Express server. My function will:

1. Take a number `index` as its argument.
1. Make a request to the `/cats` endpoint we've been using so far.
1. Isolate the array on `catsArray` key of my data.
1. Return the cat at the index number passed as an argument to my function. 

From this, we can isolate a few test cases: 
```
fetchCatAtIndex(2)
---> should log the cat at index 2 in my array of data.

fetchCatAtIndex(10)
---> should return some form of error as my array only has three cats in it. 

fetchCatAtIndex("string")
---> should return an error since "string" is not a valid index value
```

Let's TDD the `fetchCatAtIndex(index)` function: 

[VIDEO HERE]

fetchCatAtIndex.js
```

```

fetchCatAtIndex.test.js
```
```

## Exercise: 

Test-drive the case we didn't do together, where the array is out of scope. 
Link to cat server - fork and clone and run for this exercise to work 

## Challenge: 
