## Testing an Express Endpoint:

## Objective:
1. Learn how to write tests for asynchronous code.
1. Learn how to write endpoint tests. 

## Introduction:
So far, **we have been writing tests for synchronous functions only**. When we test our express endpoints, we have to deal with the fact that **the response we want to test is coming to us asynchronously**.

Let's see how we should deal with this new case scenario with Jest. 

## Writing our test cases

## Syntax



const response = await request(app).get("/non-existent-route");